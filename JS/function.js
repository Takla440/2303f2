// header scroll 


let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if (document.documentElement.scrolltop>50){
        nav.classList.add('header-scrolled');
    }
    else{nav.classList.remove('header-scrolled')}     
   }


   //Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
  

// COUNTER 
 
$(document).ready(function(){
    $('.counter-value').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 3500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});





// feedbackForm 


const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click',(e) => {
        if (e.target.parentNode.classList.contains('rating')) {
            removeActive();
            e.target.parentNode.classList.add('active');
            selectedRating = e.target.nextElementSibling.innerHTML;
        }
        if (e.target.classList.contains('rating')) {
            removeActive();
            e.target.classList.add('active');
            selectedRating = e.target.nextElementSibling.innerHTML;
        }

    })

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        
        Thank You!
        
        Feedback : ${selectedRating}
        We'll use your feedback to improve our customer support
    `
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}



