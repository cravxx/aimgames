&nbsp;

// delet this
$$('.row2 > .gensmall')[0].textContent

// ignore this
$('table.forumline:nth-child(13) > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(1) > span:nth-child(1)').contents().filter(() => {
  return this.nodeType == 3;
}).each((i, v) => {
  console.log(i, v);
  v.nodeValue = '&nbsp;' + v.nodeValue;
});

// add nbsp to birthdays
var sel = document.querySelector('table.forumline:nth-child(13) > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(1) > span:nth-child(1)');
var nbsp = '\u00a0';
for (let i = 0, len = sel.childNodes.length; i < len; i++) {
  var n = sel.childNodes[i];
  if (n.nodeType == 3 && n.nodeValue[0] == ' ') {
    //console.log(n);
    n.nodeValue = nbsp + n.nodeValue.substring(1);
  }
}

// replace ' : ' with ': '
var nodes = document.querySelectorAll('table.forumline:nth-child(13) > tbody > tr > td > .gensmall');
for (let i = 0, len = nodes.length; i < len; i++) {
  for (let j = 0, alen = nodes[i].childNodes.length; j < alen; j++) {
    var n = nodes[i].childNodes[j];
    if (n.nodeType == 3 && n.nodeValue.indexOf(' : ') > -1) {
      n.nodeValue = n.nodeValue.replace(/ +: +/, ': ');
    }
  }
}

// trim large post numbers with 'k'
var numbers = document.querySelectorAll('.row2 > .gensmall'); //('table.forumline > tbody:nth-child(1) > tr > td:nth-child(4) > span:nth-child(1)');
for (let i = 0, len = numbers.length; i < len; i++) {
  var n = numbers[i].childNodes[0];
  var bn = n.nodeValue;
  if (bn.length >= 4) {
    n.nodeValue = bn.substring(0, bn.length - 3) + 'k';
  }
}
