/*This code is ES5 and need to be updated to ES6+ */

var header = document.getElementsByTagName("header")[0];
var burger = document.getElementById("burger");
var nav = document.getElementById("nav");
var login = document.getElementById("login");
/*
This function take care of showing the menu when 
the user is using a small screen
*/
function toggle(){

    if (nav.style.display == "flex"){
        nav.style.display = "";
    }
    else{
        nav.style.display = "flex";
    }
    
};
/*
This function determine if the user windowns is bigger than 900px if yes
it will change the class of header and nav so it can get fixed on the left
when user scroll down pass 100px on the Y axes.
*/
// function vasy(){
//     var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
//     if(viewportWidth > 900){
//     if (window.pageYOffset >= 100) {
//         header.classList.add("sticky");
//         header.classList.remove("norm");
//         nav.classList.remove("n-norm");
//         }
//     else {
//         nav.classList.add("n-norm");
//         header.classList.remove("sticky");
//         header.classList.add("norm");
//         }
//     }
// }

/*
This line is only important if a screen get resize and the navigation bar
is fixed on the side of the screen. This function will reset it to the top for
tablets, mobiles or small windows
*/
function eee(){
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if(viewportWidth < 900){
        nav.classList.add("n-norm");
      header.classList.remove("sticky");
    header.classList.add("norm");
    }
}
let ttt = 0
const change = () =>{
    if (ttt == 0) {
        document.documentElement.style.setProperty('--backgroundColor', '#000');
        document.documentElement.style.setProperty('--textColor', '#fff');
        document.documentElement.style.setProperty('--backgroundBColor', '#000');
        document.documentElement.style.setProperty('--backgroundHColor', '#000');
        document.documentElement.style.setProperty('--mainColor', '#fff');
        document.documentElement.style.setProperty('--board', '#4990b6');
        document.documentElement.style.setProperty('--hoverColor', '#000');
        document.querySelector('#switch img').src = './assets/sun.svg'
        ttt += 1
    }else{
        document.documentElement.style.setProperty('--backgroundColor', '#fff');
        document.documentElement.style.setProperty('--textColor', '#000');
        document.documentElement.style.setProperty('--backgroundBColor', '#fff');
        document.documentElement.style.setProperty('--backgroundHColor', '#DBDBDB');
        document.documentElement.style.setProperty('--mainColor', '#000');
        document.documentElement.style.setProperty('--board', '#e67065');
        document.documentElement.style.setProperty('--hoverColor', '#fff');
        document.querySelector('#switch img').src = './assets/moon.png'
        ttt -= 1
    }
    
}