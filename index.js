
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  let div = document.querySelector('#nested');
  return div.querySelector('.target')
}

function increaseRankBy(n) {
  let lis = document.querySelectorAll('ul.ranked-list li');
  lis.forEach(function(li) {
    li.innerText = parseInt(li.innerText, 10) + n;
  })
}

function deepestChild() {
  let grandNode = document.querySelector('#grand-node');
  let divs = grandNode.querySelectorAll('div');
  return divs[divs.length - 1];
}
