// @ts-nocheck

// Block -- Autor --

/// source

const img = document.querySelector('.img_slide');

const imgArr = ['../img/6_team/3.jpg', 
                '../img/6_team/1.jpg', 
                '../img/6_team/2.jpg', 
                '../img/6_team/4.jpg']; 

const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

/// functions

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

// Block -- Info --

/// source

const imgInfo = document.querySelector('.img_dots');

const imgArrInfo = ['../img/6_team/3.jpg', 
                '../img/6_team/1.jpg', 
                '../img/6_team/2.jpg', 
                '../img/6_team/4.jpg']; 

const dotsInfo = document.querySelectorAll('.dot_info');

let currentIndexInfo = 0;

/// functions

function changeIndexDots(ind){
    currentIndexInfo = ind;
    slideInfo(currentIndexInfo);
}

function nextIndexInfo(direction){
    currentIndexInfo += direction;
    if(currentIndexInfo >= imgArrInfo.length){
        currentIndexInfo = 0;
    }else if (currentIndexInfo < 0){
        currentIndexInfo = imgArrInfo.length - 1;
    }

    slideInfo(currentIndexInfo);
}

function slideInfo (index) {
    imgInfo.src = imgArrInfo[index];

    updateDotsInfo(index);
}

function updateDotsInfo(index){
    for(let dotInfo of dotsInfo ){
        dotInfo.classList.remove('dot_active_info');
    }
    dotsInfo[index].classList.add('dot_active_info');
}