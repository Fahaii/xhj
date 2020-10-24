/* 固定导航栏------------------------------------------------- */
window.onload = function(){
    var nav = document.getElementById('nav');
    var phone = document.getElementById('phone');
    var main = document.getElementById("main");


    window.onscroll = function(){
        var height = getScroll().top;
        if(height>nav.offsetHeight){
            phone.className = "fixed";
            main.style.marginTop = phone.offsetHeight+"px";
        }else{
            phone.className = "";
            main.style.marginTop = 0;
        }
    }
}

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
/* 二级菜单隐藏显示------------------------------------------------- */
var ListIcon = $id("list-icon");
var ListProduct = $id("list-product");
var ListContacts = $id("list-contacts");
var ListAbout= $id("list-about");


var NavIcon = $id("nav-ctn-icon");
var NavProduct = $id("nav-ctn-product");
var NavContacts = $id("nav-ctn-contacts");
var NavAbout = $id("nav-ctn-about");


ListIcon.onclick = function(){
    NavIcon.style.display = "block";
    ListIcon.style.fontWeight = "600";
    NavProduct.style.display = "none";
    NavContacts.style.display = "none";
    NavAbout.style.display = "none";
}
ListProduct.onclick = function(){
    NavProduct.style.display = "block";
    ListProduct.style.fontWeight = "600";
    NavIcon.style.display = "none";
    NavContacts.style.display = "none";
    NavAbout.style.display = "none";
}
ListContacts.onclick = function(){
    NavIcon.style.display = "none";
    NavProduct.style.display = "none";
    NavContacts.style.display = "block";
    ListContacts.style.fontWeight = "600";
    NavAbout.style.display = "none";
}
ListAbout.onclick = function(){
    NavIcon.style.display = "none";
    NavProduct.style.display = "none";
    NavContacts.style.display = "none";
    NavAbout.style.display = "block";
    ListAbout.style.fontWeight = "600";}

