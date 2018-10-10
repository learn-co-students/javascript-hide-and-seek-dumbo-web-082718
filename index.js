
function getFirstSelector (selector) {
  return document.querySelector(`${selector}`);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let divs = document.querySelectorAll('#grand-node div')
    divs[3].innerText
}

function increaseRankBy (n) {
  let lis = document.querySelectorAll('.ranked-list li')
  // for (let i = 0; i < lis.length; i++) {
  //   lis[i].innerText = parseInt(lis[i].innerText) + n
  // }
  lis.forEach(function (li) {
    li.innerText = parseInt(li.innerText) + n;
  });
}
