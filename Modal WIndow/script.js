"use strict"
let btnShowModal = document.querySelectorAll("#show-modal");
let showWindow = document.querySelector(".window");
let closeModal = document.querySelector("#close-modal");
let overlay = document.querySelector(".overlay");
console.log(btnShowModal);
// hide modal function
const hideModal = function(){
    showWindow.classList.add("hidden");
    overlay.classList.add("hidden");
};
const showModal = function(){
    showWindow.classList.remove("hidden");
    overlay.classList.remove("hidden");
};
//when button is clicked window will appear;
for(let i = 0; i < btnShowModal.length;i++){
    console.log(btnShowModal[i].addEventListener("click",function(){
        showWindow.classList.remove("hidden");
        overlay.classList.remove("hidden");
    }));
};
//when user click out of window it will dissappear
 closeModal.addEventListener("click",function(){
    showModal()
});
//when ESC is clicked window will dissappear
document.addEventListener('keydown',function(e){
    if(e.key === "Escape"){
        if(!showWindow.classList.contains("hidden")){
            hideModal();
        };
    };
});

