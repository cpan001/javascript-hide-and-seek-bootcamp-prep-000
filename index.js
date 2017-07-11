

function getFirstSelector(selector) {
  return document.querySelector(`${selector}`);
};

function nestedTarget() {
  return document.querySelector('div#nested div.target');
}

const lst = document.querySelectorAll('ul.ranked-list li');

function increaseRankBy(n) {
  for (let i = 0; i < lst.length; i++) {
    lst[i].innerHTML = parseInt(lst[i].innerHTML) + n;
  }
}


function deepestChild() {
  let div = document.querySelector('div#grand-node');
  let div2 = div.querySelector('div');
  while (div2 !== null) {
    div = div2;
    div2 = div.querySelector('div');
  }
  return div;
}
