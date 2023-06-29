const help_btn = document.querySelector('.help_btn');
const popup = document.getElementById('popup');
const Gobtn = document.getElementById('GoButton');
const close = document.getElementById('close');

const Gotopage = () =>{
    var userInput = document.getElementById("input").value;
    var link = "https://www.justdial.com/"+userInput+"/Pet-Clinics/nct-10616595";
    window.location.href = link;
}

help_btn.addEventListener('click',()=>{
    popup.style.display='block';
});

close.addEventListener('click',()=>{
    popup.style.display = 'none';
})


Gobtn.addEventListener('click',Gotopage);