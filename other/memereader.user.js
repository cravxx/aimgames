// ==UserScript==
// @name        memereader
// @namespace   wemes
// @description cant think of anything snarky to write here
// @version     0.2
// @include     http://g.e-hentai.org/*
// @include     http://search.hentai.ms/*
// @include     http://manga.hentai.ms/*
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_xmlhttpRequest
// @grant       GM_addStyle
// @grant       unsafeWindow
// ==/UserScript==

let url = window.location.href;

function getHentaiMsMangaId(url) {
  if (/\/[0-9]+$/.test(url)) { // is read page
    url = url.match(/.*(\/manga)?\/(.*?)\/[0-9]+$/)[2];
    if (!url) {
      alert('FUCK! url is ' + url);
      throw 'FUCK! url is ' + url;
    }
    return url;
  } else { // is gallery page
    url = url.substring(url.lastIndexOf('/') + 1, url.indexOf('&'));
    if (!url) {
      alert('FUCK! url is ' + url);
      throw 'FUCK! url is ' + url;
    }
    return url;
  }
}

if (url.startsWith('http://g.e-hentai.org/')) {
  
  /**
   * gigantic convoluted func to get the page number from the url
   * @param n the url
   */
  const getPageNumber = function(n) {
    n=n.substr(n.indexOf('/s/')+3);
    const lastindex = n.lastIndexOf('?');
    return Number(n.substring(n.indexOf('-')+1, lastindex == -1 ? n.length : lastindex));
  }
  
  const insertNote = function() {
    if (document.getElementById('weeeeeeeeeeee') === null) {
      const el = document.createElement('h1');
      el.setAttribute('style', 'color: #b1b10d;font-weight: normal;');
      el.setAttribute('id', 'weeeeeeeeeeee')
      el.textContent = 'You have been redirected to where you last left off :lenny:';

      const tit = document.getElementById('i1');
      tit.insertBefore(el, tit.firstChild);
    }
  }
  
  /**
   * redirects to page at pageNumber
   */
  const goToPage = function(pageNumber) {
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
        } else {
          alert('failed: correctPageUrl is missing');
        }
      }
    });

  }

  /**
   * call callback with page at pageNumber
   */
  const findPage = function(albumUrl, pageNumber, callback) {
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


  console.log('------------ LOAD --------------');

  if (url.indexOf('/s/') > -1) { // read page
    
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

  } else if (url.indexOf('/g/') > -1) { // view gallery page
    
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
  } else { // search page or other undefined page
    
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
}

if (url.startsWith('http://search.hentai.ms/')) {
  if (url.indexOf('http://search.hentai.ms/related.php') > -1) {
    //start related items
    GM_addStyle(`

/*
 *
 * http://search.hentai.ms/related.php
 *
 */

/*in related frame*/
.index_box, .index_box > table {
    display: block;
} 

.index_box > table > tbody {
    display: inline-block;
    width: 100%;
}

.index_box > table > tbody > tr {
    display: inline-block;
}
`);
    // end related items
  } else {
    // not related items
    GM_addStyle(`
.pagination_number[href="http://search.hentai.ms/?tag=-"] {
    padding: 5px;
    margin: 2px;
}

td[width="425px"] > .pagination > .pagination_number {
    padding-top: 1px !important;
    padding-bottom: 1px !important;
    margin: 1px !important;
    flex-grow: 1;
}

td[width="425px"] > .pagination {
    display: flex;
    /*display: flex;*/
    justify-content: space-between;
    flex-wrap: wrap;
    /*flex-grow: auto;*/
    align-items: stretch;
    /*align-content: space-between;*/
}
`);
  }
  
}

// TODO free.hentai.ms and manga.hentai.ms are the same thing but different links and not interchangeable

if (url.startsWith('http://manga.hentai.ms/manga/') && /\/[0-9]+$/.test(url)) { // the actual read pages
  const mangaId = getHentaiMsMangaId(url);
  
  const pageNumber = GM_getValue(mangaId + '_read', 0);
  
  let val = document.querySelector('body > center:nth-child(4) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > center:nth-child(2)')
    .childNodes[1]
    .nodeValue;
  
  val = val.substring(val.indexOf('/') + 1, val.indexOf(')'));
  
  GM_setValue(mangaId + '_size', Number(val)-1);
  console.log('setting', mangaId + '_size', Number(val)-1);
  
  const currentPage = Number(url.substring(url.lastIndexOf('/') + 1));
  
  if (currentPage > pageNumber) {
    console.log('setting', mangaId + '_read', currentPage);
    GM_setValue(mangaId + '_read', currentPage);
  } else if (currentPage < pageNumber) {
    window.location.href = pageNumber;
  }
} else if (url.startsWith('http://manga.hentai.ms/manga/')) {//hentai.ms gallery view (not read pages)
  const mangaId = getHentaiMsMangaId(url);
  
  const pageNumber = GM_getValue(mangaId + '_read', 0);
  console.log('getting', mangaId + '_read', pageNumber);
  
  let numPages = document.querySelector('[href^="http://search.hentai.ms/?pages"]');
  if (numPages) {
    numPages = numPages.textContent;
    if (numPages) {
      numPages = numPages.match(/[0-9]+/)[0];
      if (numPages) {
        GM_setValue(mangaId + '_size', Number(numPages)-1);
        console.log('setting', mangaId + '_size', Number(numPages)-1);
      }
    }
  }
  
  const sidebarElement = document.querySelector('td[width="330px"]');
  const div = document.createElement('div');
  div.setAttribute('class', 'pagination');
  div.setAttribute('style', 'min-height: 20px;');
  const a = document.createElement('a');
  a.setAttribute('class', 'pagination_number');
  a.setAttribute('href', '/manga/' + mangaId + '/' + (pageNumber < 10 ? '0'+pageNumber : pageNumber));
  a.appendChild(document.createTextNode('Jump to page ' + pageNumber));
  div.appendChild(a);
  
  sidebarElement.insertBefore(div, sidebarElement.firstChild);
  // remove crap
  sidebarElement.children[1].setAttribute('style', 'display: none;');
  sidebarElement.children[2].setAttribute('style', 'display: none;');
  //sidebarElement.children[3].setAttribute('style', 'display: none;');
  
  GM_addStyle(`
/*
 *
 * http://manga.hentai.ms/
 *
 */

.index_box > table > tbody > tr > td {
    display:block;
}
iframe[src^="http://search.hentai.ms/related.php?"] {
    max-height: 336px;
    display: block;
    width: 100% !important;
}

.index_box > table, .index_box > table > tbody > tr > td > table {
    width: 100%;
}

table.search_gallery {
    margin: auto;
}

/*ugly selector for reorganizing things, unreliable as fuck*/
/*div.index_box:nth-child(4) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) {
    transform: translateY(238%);
}
div.index_box:nth-child(4) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) {
    transform: translateY(-43.6%);
}*/
`);
}
