function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div.target');
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild() {
  var parent = document.querySelector('#grand-node');
  var child = parent.querySelector('div');
  while (child !== null) {
      parent = child;
      child = child.querySelector('div');
  }
  return parent;
}
