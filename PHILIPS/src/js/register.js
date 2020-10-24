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
/* ---------------------------------------------------------- */
var sub = $id("sub");
console.log(sub);
var isOnly = false;
var userName = $id("uname");
console.log(userName);
userName.onchange = function(){
    var uNameVal = this.value;
    var xhr = new XMLHttpRequest();
    xhr.open("get","../php/checkname.php?name=" + uNameVal);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                var res = xhr.response;
                if(res === "0"){
                    isOnly = false;
                    alert("用户名已存在！！");
                }else{
                    isOnly = true;
                    alert("用户名可用！！");
                }
            }
        }
    }
}

sub.onclick = function(){
    if(isOnly){
        return true;
    }return false;
}
