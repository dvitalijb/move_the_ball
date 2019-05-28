 const field = document.getElementById('field');
 const ball = document.getElementById('ball');
 const maxMoveInParentWidth = field.offsetWidth;
 const maxMoveInParentHeight = field.offsetHeight;
 const borderField = 10;
 const ballWith = ball.offsetWidth;
 const ballHeight = ball.offsetHeight;
 const halfBallWidth = ballWith / 2;
 const halfBallHeight = ballHeight / 2;

 function moveBall(event) {
     const { documentElement } = document;
     const coordinatesY = event.clientY + documentElement.scrollTop;
     const coordinatesX = event.clientX + documentElement.scrollLeft;
     let ballStyleTop;
     let ballStyleLeft;

     ball.style.top = coordinatesY -borderField-halfBallHeight  + 'px';
     ball.style.left = coordinatesX -borderField-halfBallWidth + 'px';

     console.log(ball.style.top+' ball.style.top',ball.style.left+' ball.style.left')
     if(coordinatesX<borderField+halfBallWidth){

         ballStyleLeft = 0;
     }
     if(coordinatesY<borderField+halfBallHeight){
         ballStyleTop = 0;

     }
     if(coordinatesX>(maxMoveInParentWidth-borderField-halfBallWidth)){

         ballStyleLeft = maxMoveInParentWidth-ballWith-(borderField*2);
     }
     if(coordinatesY>(maxMoveInParentHeight -borderField-halfBallHeight)){
         ballStyleTop =maxMoveInParentHeight-ballHeight-(borderField*2) ;

     }


 }

 field.addEventListener('click', moveBall, true);

// const field = document.getElementById('field');
// const ball = document.getElementById('ball');
// const maxMoveInParentWidth = parseInt(getComputedStyle(field).width, 10);
// console.log(field.offsetWidth)
// const maxMoveInParentHeight = parseInt(getComputedStyle(field).height, 10);
// const borderField = parseInt(getComputedStyle(field).borderWidth, 10);
// const marginBody = parseInt(getComputedStyle(document.body).margin, 10);
// const ballWith = parseInt(getComputedStyle(ball).width, 10);
// const ballHeight = parseInt(getComputedStyle(ball).height, 10);
//
// function moveBall(event) {
//     const { documentElement } = document;
//     const coordinatesY = event.clientY + documentElement.scrollTop;
//     const coordinatesX = event.clientX + documentElement.scrollLeft;
//     const halfBallWidth = ballWith / 2;
//     const halfBallHeight = ballHeight / 2;
//     const lengthBorderMargin = borderField + marginBody;
//
//     ball.style.top = (coordinatesY - halfBallHeight - lengthBorderMargin) + 'px';
//     ball.style.left = (coordinatesX - halfBallWidth - lengthBorderMargin) + 'px';
//
//     if (coordinatesX < (halfBallWidth + lengthBorderMargin)) {
//         ball.style.left = 0 + 'px';
//     }
//     if (coordinatesY < (halfBallHeight + lengthBorderMargin)) {
//         ball.style.top = 0 + 'px';
//     }
//     if (coordinatesX > (maxMoveInParentWidth - halfBallWidth + borderField)) {
//         ball.style.left = (maxMoveInParentWidth - ballWith) + 'px';
//     }
//     if (coordinatesY > (maxMoveInParentHeight - halfBallHeight + borderField)) {
//         ball.style.top = (maxMoveInParentHeight - ballHeight) + 'px';
//     }
// }
//
// field.addEventListener('click', moveBall, true);
