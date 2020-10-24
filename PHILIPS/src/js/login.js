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
/* 登录方式选择 ---------------------------------------------------*/
var PwdLogin = $id("pwd-login");
var ShortLogin = $id("shrot-login");
var PwdCtn = $id("pwd-login-ctn");
var ShortCtn = $id("short-login-ctn");

console.log(PwdLogin,ShortLogin);

PwdLogin.onclick = function(){
    console.log(1);
    ShortLogin.className = "login-change-p2";
    PwdLogin.className = "login-change-p1";
    PwdCtn.style.display  = "block";
    ShortCtn.style.display  = "none";
}
ShortLogin.onclick = function(){
    ShortLogin.className = "login-change-p1";
    PwdLogin.className = "login-change-p2";
    PwdCtn.style.display  = "none";
    ShortCtn.style.display  = "block";
}