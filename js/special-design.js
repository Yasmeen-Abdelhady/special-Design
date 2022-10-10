let slide = document.querySelector('.slide');
let circle = document.querySelectorAll('.slide .circle li .fa-circle');
let navIcon = document.querySelector('.navigator .nav-icon');
let colors = document.querySelectorAll('.navigator .colors li');
let randomBtns = document.querySelectorAll('.random-bg .btns button');
let bulletBtns = document.querySelectorAll('.sh-bullets .btns button');
let images = document.querySelectorAll('.our-gallery .images .image img');
let links = document.querySelectorAll('.slide ul li a');
let bars = document.querySelector('.fa-bars');
let counter = 1;
let t;

// bars event
bars.onclick = function(){
    if(this.nextElementSibling.style.display == 'none'){
        this.nextElementSibling.style.display = 'flex';
    }
    else{
        this.nextElementSibling.style.display = 'none';
    }
}
// slide show
window.onload = function(){
    t = setInterval(function(){
        counter++;
        if(counter == "9"){
            counter = 1;
        }
        slide.style.backgroundImage = `url(../images/${counter}.jpg)`;
    } , 1000);
}

//  circle event
circle.forEach(function(ele){
    ele.onmouseenter = function(){
        ele.nextElementSibling.style.display = 'flex';
    }
    ele.onmouseleave = function(){
        ele.nextElementSibling.style.display = 'none';
    }
});

// nav open & close
navIcon.onclick = function(){
    if(this.parentElement.classList.contains('toggle')){
        this.parentElement.classList.remove('toggle');
        this.firstElementChild.style.animation = 'none';
    }
    else{
        this.parentElement.classList.add('toggle');
        this.firstElementChild.style.animation = 'rotate 1s infinite linear';
    }
}

// change colors
colors.forEach(function(ele){
    ele.onclick = function(){
        colors.forEach((el) => el.classList.remove('active'));
        ele.classList.add('active');
        window.localStorage.backgroundColor = ele.style.backgroundColor;
        document.documentElement.style.setProperty('--main' , localStorage.backgroundColor);
    }
});

randomBtns.forEach((ele)=>{
    ele.onclick = function(){
        randomBtns.forEach((el) => el.classList.remove('active'));
        ele.classList.add('active');
        if(ele.innerHTML == 'NO'){
            clearInterval(t);
        }
    }
});

// show & hide Bullets
bulletBtns.forEach((ele)=>{
    ele.onclick = function(){
        bulletBtns.forEach((el) => el.classList.remove('active'));
        ele.classList.add('active');
        if(ele.innerHTML == 'NO'){
            document.querySelector('.slide .circle').style.display='none';
        }
        else{
            document.querySelector('.slide .circle').style.display='inline-block';
        }
    }
});

// show and hide pop-up
images.forEach(function(ele){
    ele.onclick = function(){
        document.querySelector('.pop-up').style.display = 'flex';
        document.querySelector('.pop-up img').src = ele.src ;
        document.querySelector('.pop-up h3').innerHTML = ele.alt;
    }
});
document.querySelector('.pop-up i').onclick = function(){
    document.querySelector('.pop-up').style.display = 'none';
}

// skills animation
let skillOffsetTop = document.querySelector('.our-skills').offsetTop;
let skill = document.querySelectorAll('.our-skills .skills span');
window.onscroll = function(){
    let windowScrollTop = this.scrollY;
    if(windowScrollTop > skillOffsetTop){
        skill.forEach(function(ele){
            ele.style.width = ele.dataset.width;
        });
    }
}

// scroll into sections
circle.forEach(function(bullet){
    bullet.addEventListener('click' , function(e){
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior : 'smooth'
        })
    })
})



// reset & clearInterval 