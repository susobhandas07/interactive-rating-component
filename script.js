var button=document.getElementsByClassName('submit')[0];
var value;
var page1=document.getElementsByClassName('container')[0];
var page2=document.getElementsByClassName('container')[1];
var rates=document.querySelectorAll('.rating-point');
var rating=document.querySelector('span');
rates.forEach(rate => {
    rate.addEventListener('click',()=>{
        value=(rate.innerHTML)
    });  
});
button.addEventListener('click',()=>{
    rating.innerHTML=value;
    page2.classList.remove('hidden');
    page1.classList.add('hidden');
})