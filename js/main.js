var bgDark=document.getElementById("bg-dark");
var departmans=document.querySelectorAll("div#main-container div#parts-carousel div.departmans");
var body=document.getElementsByTagName('body')[0];
var amoozeshIcon=document.querySelector("div#page-bar div.bar-container>div.row>div.amoozesh-icon");
var parvareshIcon=document.querySelector("div#page-bar div.bar-container>div.row>div.parvaresh-icon");
var headerContainer=document.getElementById("header-container");
var mainContainer=document.getElementById("main-container");
var pageBar=document.getElementById("page-bar");
var footerContainer=document.getElementById("footer-container");
var mobMenuButton=document.querySelector("[mob-menu-button]");
var mobCloseButton=document.querySelector("[mob-close-button]");
var mobMenu=document.querySelector("div#mob-menu");
var bgDarkMenu=document.getElementById("bg-dark-menu");
var bgImage=document.querySelector("[background-image]");


function myFunction(x) {
    if (x.matches) { // If media query matches
        bgImage.src="images/6409424.jpg";
    } else {
        bgImage.src="images/346725.jpg";
    }
}
  
  // Create a MediaQueryList object

var x = window.matchMedia("(max-width: 900px)")

// Call listener function at run time

myFunction(x);

// Attach listener function on state changes


x.addEventListener("change", function() {
  myFunction(x);
});
mobMenuButton.addEventListener("click",mobMenuOpen);
function mobMenuOpen(){
    mobMenu.classList.add("mob-menu-open");
    bgDarkMenu.classList.add("bg-dark-menu-show");
    body.style.overflowY="hidden";    

}
mobCloseButton.addEventListener("click",mobMenuClose);
function mobMenuClose(){
    mobMenu.classList.remove("mob-menu-open");
    bgDarkMenu.classList.remove("bg-dark-menu-show");
    body.style.overflowY="scroll";    

}

amoozeshIcon.addEventListener("click",function(){
    window.scrollTo({ top: 20, behavior: 'smooth'})
});
parvareshIcon.addEventListener("click",function(){
    window.scrollTo({ top: 120, behavior: 'smooth'})
});
var myScrollFunc = function () {
    var y = window.scrollY;
    if (y>=20 && !searchBar.classList.contains("search-container-show")) {
        bgDark.classList.add("bg-dark-show");
        headerContainer.classList.add("header-container-change");
        departmans[0].classList.add("dep-amozesh-show");
        amoozeshIcon.classList.add("amoozesh-icon-light");
    } else if(!searchBar.classList.contains("search-container-show")){
        bgDark.classList.remove("bg-dark-show");
        headerContainer.classList.remove("header-container-change");
        departmans[0].classList.remove("dep-amozesh-show");
        amoozeshIcon.classList.remove("amoozesh-icon-light");

    }
    if (y>=120 && !searchBar.classList.contains("search-container-show")) {
        departmans[0].classList.remove("dep-amozesh-show");
        amoozeshIcon.classList.remove("amoozesh-icon-light");
        departmans[1].classList.add("dep-parvaresh-show");
        if(!footerContainer.classList.contains("footer-container-goesup")){
            parvareshIcon.classList.add("parvaresh-icon-light");
        }
    } else {
        departmans[1].classList.remove("dep-parvaresh-show");
        parvareshIcon.classList.remove("parvaresh-icon-light");

    }
    if (y>=220){
        footerContainer.classList.add("footer-container-goesup");
        departmans[1].classList.remove("dep-parvaresh-show");
        parvareshIcon.classList.remove("parvaresh-icon-light");

    }else{
        footerContainer.classList.remove("footer-container-goesup");
    }

};
window.addEventListener("scroll", myScrollFunc);




var searchShowIcon=document.querySelector("div#page-bar div.bar-container>div.search-container>svg.search-icon");
var searchBar=document.querySelector("div#page-bar div.bar-container>div.search-container");
var searchCloseIcon=document.querySelector("div#page-bar div.bar-container>div.search-container>svg.close-icon");
var searchResults=document.querySelector("div#search-results");

searchShowIcon.addEventListener("click",function(){
    bgDark.classList.add("bg-dark-show");
    headerContainer.classList.add("header-container-change");
    searchBar.classList.add("search-container-show");
    departmans[0].classList.remove("dep-amozesh-show");
    departmans[1].classList.remove("dep-parvaresh-show");
    searchResults.classList.add("search-results-show");
    body.style.overflowY="hidden";    
});
searchCloseIcon.addEventListener("click",function h(){
    bgDark.classList.remove("bg-dark-show");
    headerContainer.classList.remove("header-container-change");
    searchBar.classList.remove("search-container-show");
    searchResults.classList.remove("search-results-show");
    body.style.overflowY="scroll";
    myScrollFunc();
});





$(document).ready(function(){
    $(".amozesh-carousel").owlCarousel();
    $(".parvaresh-carousel").owlCarousel();
  });
  $('.amozesh-carousel').owlCarousel({
    loop: true,
    margin:20,
    nav: true,
    center: true,
    dots:false,
    rtl:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('.parvaresh-carousel').owlCarousel({
    loop: true,
    margin:20,
    nav: true,
    center: true,
    dots:false,
    rtl:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})