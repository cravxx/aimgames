// ==UserScript==
// @name        memereader
// @namespace   wemes
// @description cant think of anything snarky to write here
// @version     0.1
// @include     http://g.e-hentai.org/*
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_xmlhttpRequest
// @grant       unsafeWindow
// ==/UserScript==

function getPageNumber(n) {
  n=n.substr(n.indexOf('/s/')+3);
  const lastindex = n.lastIndexOf('?');
  return Number(n.substring(n.indexOf('-')+1, lastindex == -1 ? n.length : lastindex));
}

let url = window.location.href;
let _url = url.substring(url.indexOf('/g/')+3);
let _urlb = url.substring(url.indexOf('/s/')+3);

// unique comic id
const comicId = (
  url.indexOf('/s/') > -1 ?
  _urlb.substring(_urlb.lastIndexOf('/')+1, _urlb.indexOf('-')) : // img page
  _url.substring(0, _url.indexOf('/')) // album page
).trim();

// page X out of Y
let currentPage = getPageNumber(url);

// amount of pages!
const _totPages = document.querySelector('.sn > div > span:last-child'); // will == null inside album page
const totalPages = _totPages ? Number(_totPages.textContent) : -1;
if (totalPages) {
  GM_setValue(comicId + '_total', totalPages);
}

function insertNote() {
  if (document.getElementById('weeeeeeeeeeee') === null) {
    const el = document.createElement('h1');
    el.setAttribute('style', 'color: #b1b10d;font-weight: normal;');
    el.setAttribute('id', 'weeeeeeeeeeee')
    el.textContent = 'You have been redirected to where you last left off :lenny:';

    const tit = document.getElementById('i1');
    tit.insertBefore(el, tit.firstChild);
  }
}

//unsafeWindow.onpopstate = function(){};

function goToPage(pageNumber) {
  const albumUrl = document.getElementsByClassName('sb')[0].firstChild.href;
  const pageUrl = '?p=' + (Math.floor(pageNumber / 40)); // pageNumber / 40 entries per page. page numbers for e-h start at 0
  
  GM_xmlhttpRequest({
    method: "GET",
    url: albumUrl + pageUrl,
    onload: function(response) {
      const doc = new DOMParser().parseFromString(response.responseText, "text/html");
      
      const correctPageUrl = doc.querySelector('.gdtm:nth-child(' + pageNumber + ')').firstChild.firstChild.href;
      if (correctPageUrl) {
        document.location.href = correctPageUrl;
        
        // this is shit:
        
        //GM_xmlhttpRequest({
        //  method: "GET",
        //  url: correctPageUrl,
        //  onload: function(response) {
        //    const parsed = new DOMParser().parseFromString(response.responseText, "text/html");
        //    //document.body = parsed.body;
        //    console.log('redirekt to: ' + correctPageUrl);
        //    
        //    insertNote();
        //
        //    url = correctPageUrl;
        //    currentPage = pageNumber;
        //  }
        //});

      } else {
        alert('failed: correctPageUrl is missing');
      }
    }
  });

}

function findPage(albumUrl, pageNumber, callback) {
  if (pageNumber==0) pageNumber = 1;
  
  const pageUrl = '?p=' + (Math.floor(pageNumber / 40)); // pageNumber / 40 entries per page. page numbers for e-h start at 0
  
  GM_xmlhttpRequest({
    method: "GET",
    url: albumUrl + pageUrl,
    onload: function(response) {
      const doc = new DOMParser().parseFromString(response.responseText, "text/html");
      
      const correctPageUrl = doc.querySelector('.gdtm:nth-child(' + pageNumber + ')').firstChild.firstChild.href;
      if (correctPageUrl) {
        callback(correctPageUrl);
      } else {
        callback('failed: correctPageUrl is missing');
      }
    }
  });

}

console.log('------------ LOAD --------------');

if (url.indexOf('/s/') > -1) {
  // read page
  
  const cachedPage = GM_getValue(comicId + '_read', 0);
  if (currentPage < cachedPage) { // oh no, we're not at the right page! let's get to it!
    console.log('loading page ', comicId + '_read', cachedPage);
    currentPage = cachedPage;
    goToPage(currentPage);
  } else {
    console.log('storing page ', comicId + '_read', currentPage);
    GM_setValue(comicId + '_read', currentPage);
  }
  
  unsafeWindow.load_image = exportFunction(function(pageN, hash) {
    if (pageN > currentPage) {
      currentPage = pageN;
      GM_setValue(comicId + '_read', currentPage);
      
      console.log('storing new page', comicId + '_read', currentPage);
      
      return unsafeWindow._load_image(pageN, hash, false);
    } else {
      insertNote();
      return false;//i guess?
    }    
  }, unsafeWindow);
  
  //const _historyPushState = unsafeWindow.history.pushState.bind(unsafeWindow.history);
  //unsafeWindow.history.pushState = exportFunction(function(a, b, c) {
  //  const futPage = getPageNumber(c);
  //  if (futPage > currentPage) {
  //    url = c;
  //    currentPage = futPage;
  //    GM_setValue(comicId + '_read', currentPage);
  //  } else {
  //    const bodyCache = document.body;
  //    setTimeout(() => {
  //      document.body = bodyCache;
  //    }, 2000);
  //    return false;
  //  }
  //  
  //  // call back
  //  console.log('pushing state', a, b, c);
  //  try {
  //    return _historyPushState(a, b, c);
  //  } catch (e) {
  //    console.error(e);
  //    throw e;
  //  }
  //}, unsafeWindow.history);
  
} else if (url.indexOf('/g/') > -1) {
  // view gallery page
  console.log(comicId + '_read');
  currentPage = GM_getValue(comicId + '_read', 0);
  
  const taglist = document.getElementById('taglist');
  if (taglist) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.setAttribute('class', 'tc');
    td.textContent = 'jump to page:'
    tr.appendChild(td);
    
    const td2 = document.createElement('td');
    const div = document.createElement('div');
    div.setAttribute('class', 'gt');
    div.setAttribute('style', 'opacity:1.0');
    const a = document.createElement('a');
    findPage(url, currentPage, str => {
      a.setAttribute('href', str);
      a.textContent = ''+currentPage;
    });
    a.textContent = 'loading';
    div.appendChild(a);
    td2.appendChild(div);
    
    tr.appendChild(td2);
    
    taglist.firstChild.firstChild.appendChild(tr);
  }
} else {
  // search page or other undefined page
  const resultTitles = document.querySelectorAll('.itg > tbody > tr > .itd > div > .it5 > a, .itg > .id1 > .id2 > a'); // convoluted querySelector because we REALLY don't want a false positive
  
  // show read progress next to title
  for (let i = 0, len = resultTitles.length; i < len; i++) {
    let href = resultTitles[i].href.replace(/http:\/\/g\.e-hentai\.org\/g\//, '');
    href=href.substring(0, href.indexOf('/'));
    const val = GM_getValue(href + '_read', 0);
    const total = GM_getValue(href + '_total', 0);
    console.log('reading mainpage', href, val, total)
    if (val > 0) {
      if (val == total) {
        resultTitles[i].textContent = '<<F>> ' + resultTitles[i].textContent;
      } else {
        resultTitles[i].textContent = '<<' + val + '/' + total + '>> ' + resultTitles[i].textContent;
      }
    }
  }
}
