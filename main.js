const field = document.getElementById('field');
const ball = document.getElementById('ball');
const maxMoveInParentWidth = parseInt(getComputedStyle(field).width, 10);
const maxMoveInParentHeight = parseInt(getComputedStyle(field).height, 10);
const ballWith = parseInt(getComputedStyle(ball).width, 10);
const ballHeight = parseInt(getComputedStyle(ball).height, 10);

function moveBall(event) {
    const coordinatesY = event.clientY + document.documentElement.scrollTop;
    const coordinatesX = event.clientX + document.documentElement.scrollLeft;
    const borderField = parseInt(getComputedStyle(field).borderWidth, 10);
    const marginBody = parseInt(getComputedStyle(document.body).margin, 10)
    const halfBallWidth = ballWith/2;
    const halfBallHeight = ballHeight/2;

     //console.log(coordinatesY+' coordinatesY')
     console.log(coordinatesX+' coordinatesX')
    ball.style.top  = (coordinatesY - halfBallHeight - borderField - marginBody) + 'px';
    ball.style.left  = (coordinatesX - halfBallWidth - borderField - marginBody) + 'px';

     if (coordinatesX < (halfBallWidth + borderField + marginBody)){
         ball.style.left  =0 + 'px';
     }
     if (coordinatesY < (halfBallHeight + borderField + marginBody)){
         ball.style.top  =0 + 'px';
     }
    if (coordinatesX > (maxMoveInParentWidth - halfBallWidth + borderField)){
        ball.style.left  = (maxMoveInParentWidth-ballWith)+'px';
    }
    if (coordinatesY > (maxMoveInParentHeight - halfBallHeight + borderField)){
        ball.style.top  = (maxMoveInParentHeight - ballHeight) +'px';
    }
    console.log(ball.style.left+' ball.style.left')
    //console.log(ball.style.top+' ball.style.top')
    //  ball.style.top  = coordinatesY-18-20 + 'px';
    //  ball.style.left  = coordinatesX-18-20 + 'px';

    // console.log(coordinatesY+' coordinatesY')
    // console.log(coordinatesX+' coordinatesX')
}

field.addEventListener('click', moveBall, true);

// const field = document.getElementById('field');
// const ball = document.getElementById('ball');
// const maxMoveInParentWidth = parseInt(getComputedStyle(field).width, 10);
// const maxMoveInParentHeight = parseInt(getComputedStyle(field).height, 10);
// const ballWith = parseInt(getComputedStyle(ball).width, 10);
// const ballHeight = parseInt(getComputedStyle(ball).height, 10);
//
// function moveBall(event) {
//     // event.stopPropagation()
//     const coordinatesY = event.clientY + document.documentElement.scrollTop;
//     const coordinatesX = event.clientX + document.documentElement.scrollLeft;
//
//
//
//     // console.log(event.clientY+' clientY')
//     // console.log(event.clientX+' clientX')
//     // console.log(document.documentElement.scrollTop+' scrollTop')
//
//     const halfBallWidth = ballWith/2;
//     const halfBallHeight = ballHeight/2;
//
//     const px = 'px';
//        // ball.style.marginLeft = (-halfBallWidth) + px;
//        // ball.style.marginTop =  (-halfBallHeight) + px;
//      // ball.style.marginLeft = '-35px';
//      // ball.style.marginTop = '-80px';
//
//      console.log(coordinatesY+' coordinatesY',maxMoveInParentHeight+' maxMoveInParentHeight')
//      // console.log(event.clientX+' clientX')
//
//     if (coordinatesY > halfBallHeight && coordinatesY < maxMoveInParentHeight) {
//         ball.style.top = (coordinatesY -40) + px;
//     }
//
//     if (coordinatesX > halfBallWidth && coordinatesX < maxMoveInParentWidth) {
//         ball.style.left = (coordinatesX -40) + px;
//     }
//
//
//     if (coordinatesY < halfBallHeight+18) {
//         ball.style.top = (halfBallHeight-20) + px;
//     }
//     if (coordinatesY > (maxMoveInParentHeight - halfBallHeight)-18) {
//         ball.style.top = (maxMoveInParentHeight - halfBallHeight) + px;
//     }
//
//
//     if (coordinatesX < halfBallWidth+18) {
//         ball.style.left = (halfBallWidth -20) + px;
//     }
//
//     if (coordinatesX > (maxMoveInParentWidth-halfBallWidth)-18) {
//         ball.style.left = (maxMoveInParentWidth - halfBallWidth) + px;
//     }
//
// }
//
// field.addEventListener('click', moveBall, true);

