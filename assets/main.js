// active navbar///
let nav = document.querySelector('.rm_navigation-wrapper')
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
    nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}
