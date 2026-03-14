// Selecting announcement

var announcement = document.getElementById("announcement")
var closebtn = document.getElementById("closebtn")


closebtn.addEventListener("click",function(){
    announcement.style.display="none"
})

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

// Search and filter


var checkboxes = document.querySelectorAll("input[name='tags']")
var products = document.querySelectorAll(".product")
var search = document.querySelector(".navbar-search input")

checkboxes.forEach(function(box){
box.addEventListener("change", filterProducts)
})

search.addEventListener("keyup", filterProducts)

function filterProducts(){

var selectedTags = []
var searchValue = search.value.toLowerCase()

checkboxes.forEach(function(box){
if(box.checked){
selectedTags.push(box.value)
}
})

products.forEach(function(product){

var tags = product.querySelector(".tags").innerText
var name = product.querySelector("h1").innerText.toLowerCase()

var tagMatch = selectedTags.length === 0 || selectedTags.some(tag => tags.includes(tag))
var searchMatch = name.includes(searchValue)

if(tagMatch && searchMatch){
product.style.display="block"
}else{
product.style.display="none"
}

})

}