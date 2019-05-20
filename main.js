const field = document.getElementById('field');
const ball = document.getElementById('ball');
const maxMoveInParentWidth = parseInt(getComputedStyle(field).width, 10);
const maxMoveInParentHeight = parseInt(getComputedStyle(field).height, 10);
const ballWith = parseInt(getComputedStyle(ball).width, 10);
const ballHeight = parseInt(getComputedStyle(ball).height, 10);

function moveBall(event) {
    event.stopPropagation()
    const coordinatesY = event.offsetY;
    const coordinatesX = event.offsetX;

    //Не розумію як мені витягнути "offsetY" і "offsetX" при натискані на ball
    //event.currentTarget - не виходить застосувати
    //А так все працює!!! Якщо не нажимати на ball((((


    const halfBallWidth = ballWith/2;
    const halfBallHeight = ballHeight/2;

    const px = 'px';
     ball.style.marginLeft = (-halfBallWidth) + px;
     ball.style.marginTop =  (-halfBallHeight) + px;


    if (coordinatesY > halfBallHeight && coordinatesY < maxMoveInParentHeight) {
        ball.style.top = coordinatesY + px;
    }

    if (coordinatesX > halfBallWidth && coordinatesX < maxMoveInParentWidth) {
        ball.style.left = coordinatesX + px;
    }


    if (coordinatesY < halfBallHeight) {
        ball.style.top = halfBallHeight + px;
    }
    if (coordinatesY > (maxMoveInParentHeight - halfBallHeight)) {
        ball.style.top = (maxMoveInParentHeight - halfBallHeight) + px;
    }


    if (coordinatesX < halfBallWidth) {
        ball.style.left = halfBallWidth + px;
    }

    if (coordinatesX > (maxMoveInParentWidth-halfBallWidth)) {
        ball.style.left = (maxMoveInParentWidth - halfBallWidth) + px;
    }

}

field.addEventListener('click', moveBall, true);

