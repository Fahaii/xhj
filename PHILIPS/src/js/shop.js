/* 顶部搜索隐藏显示 -----------------------------------------------*/

var TopSearch = $id("topsearch");
var MenuList = $id("menu-list");
var TopSearchClose = $id('topclose');
var SearchBox = $id("top-search");

/* console.log(SearchBox) */
TopSearch.onclick = function(){
    MenuList.style.display = "none";
    SearchBox.style.display = "block";   
}
TopSearchClose.onclick = function(){
    MenuList.style.display = "block";
    SearchBox.style.display = "none";
}