function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested')
}

function deepestChild(){
  return document.getElementById('grand-node').querySelector('div div div div div')
}

function increaseRankBy(n){
  let childrenz = document.getElementById('app').querySelectorAll('ul.ranked-list')
  for (let i = 0; i < childrenz.length; i++) {
    childrenz[i]['innerHTML'] = (i + n);
}

}
