// @ts-nocheck

const img = document.querySelector('.img_slide');

const imgArr = ['../img/6_team/3.jpg', 
                '../img/6_team/1.jpg', 
                '../img/6_team/2.jpg', 
                '../img/6_team/4.jpg']; 

const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function changeIndex(ind){
    currentIndex = ind;
    slide(currentIndex);
}

function nextIndex(direction){
    currentIndex += direction;
    if(currentIndex >= imgArr.length){
        currentIndex = 0;
    }else if (currentIndex < 0){
        currentIndex = imgArr.length - 1;
    }

    slide(currentIndex);
}

function slide (index) {
    img.src = imgArr[index];

    updateDots(index);
}

function updateDots(index){
    for(let dot of dots ){
        dot.classList.remove('dot_active');
    }
    dots[index].classList.add('dot_active');
}









