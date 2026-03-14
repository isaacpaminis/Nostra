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


// Image container

var sliderImages = document.querySelectorAll(".slider-image")
var sliderContainer = document.querySelector(".slider-image-container")
var rightBtn = document.querySelector(".slider-right-button")
var leftBtn = document.querySelector(".slider-left-button")

var index = 0

rightBtn.addEventListener("click",function(){

index++

if(index >= sliderImages.length){
index = 0
}

sliderContainer.style.transform = `translateX(-${index*100}%)`

})

leftBtn.addEventListener("click",function(){

index--

if(index < 0){
index = sliderImages.length - 1
}

sliderContainer.style.transform = `translateX(-${index*100}%)`

})

var hearts = document.querySelectorAll(".like-button")

hearts.forEach(function(heart){

heart.addEventListener("click",function(){

heart.classList.toggle("fa-solid")
heart.classList.toggle("fa-regular")
heart.classList.toggle("liked")

})

})