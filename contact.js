// selecting side nav bar and menu icon

var sidenav=document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closesidenav=document.getElementById("close-sidenav")

menuicon.addEventListener("click",function(){
    sidenav.style.left=0
})
closesidenav.addEventListener("click",function(){
    sidenav.style.left="-50%"
})
