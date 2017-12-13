var targetRotation = 0;

var windowheight, windowwidth;

var px = 0;
var farpxmax, farpx;
function init() {
    windowwidth = window.screen.availWidth;
    windowheight = document.body.clientHeight;
    farpxmax = farpx = ((1 - (500 / windowheight)) * 1000) + 540;


    document.getElementById("Figure").addEventListener('mousedown', onDocumentMouseDown, false);
    document.getElementById("Figure").addEventListener('touchstart', onDocumentTouchStart, false);
    document.getElementById("Figure").addEventListener('touchmove', onDocumentTouchMove, false);
    window.addEventListener('resize', onWindowResize, false);
    setInterval(Rmove, Math.floor(2000 / 60));
}
function onWindowResize() {
    windowwidth = window.screen.availWidth;
    windowheight = document.body.offsetHeight;
    farpxmax = farpx = ((1 - (500 / windowheight)) * 1000) + 540;

}


function Rmove() {
    //document.getElementById('point1').style.webkitTransform = "translateZ(" + (farpx + 40 ) + "px)rotateY(" + (px + 45) + "deg)  translateZ(-540px)translateY(100px)rotateX(0deg)";
    //document.getElementById('arrow1').style.webkitTransform = "translateZ(" + (farpx + 40) + "px)rotateY(" + (px + 20) + "deg)  translateZ(-540px)rotateX(0deg)";
    //document.getElementById('arrow2').style.webkitTransform = "translateZ(" + (farpx + 40 ) + "px)rotateY(" + (px + 90) + "deg)  translateZ(-540px)rotateX(0deg)";

    document.getElementById('img1').style.webkitTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px + 45) + "deg) translateZ(-540px)";
    document.getElementById('img2').style.webkitTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px + 22.5) + "deg) translateZ(-540px)";
    document.getElementById('img3').style.webkitTransform = "translateZ(" + (farpx ) + "px)rotateY(" + px + "deg) translateZ(-540px)";

    document.getElementById('img4').style.webkitTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 22.5) + "deg) translateZ(-540px)";
    document.getElementById('img5').style.webkitTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 45) + "deg) translateZ(-540px)";
    document.getElementById('img6').style.webkitTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 67.5) + "deg) translateZ(-540px)";
    document.getElementById('img7').style.webkitTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 90) + "deg) translateZ(-540px)";
    document.getElementById('img8').style.webkitTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 112.5) + "deg) translateZ(-540px)";
    document.getElementById('img9').style.webkitTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 135) + "deg) translateZ(-540px)";
    document.getElementById('img10').style.webkitTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 157.5) + "deg) translateZ(-540px)";
    document.getElementById('img11').style.webkitTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 180) + "deg) translateZ(-540px)";
    document.getElementById('img12').style.webkitTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 202.5) + "deg) translateZ(-540px)";
    document.getElementById('img13').style.webkitTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 225) + "deg) translateZ(-540px)";
    document.getElementById('img14').style.webkitTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 247.5) + "deg) translateZ(-540px)";
    document.getElementById('img15').style.webkitTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 270) + "deg) translateZ(-540px)";
    document.getElementById('img16').style.webkitTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 292.5) + "deg) translateZ(-540px)";
    //------------------------------------------------------------
    document.getElementById('img1').style.oTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px + 45) + "deg) translateZ(-540px)";
    document.getElementById('img2').style.oTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px + 22.5) + "deg) translateZ(-540px)";
    document.getElementById('img3').style.oTransform = "translateZ(" + (farpx ) + "px)rotateY(" + px + "deg) translateZ(-540px)";

    document.getElementById('img4').style.oTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 22.5) + "deg) translateZ(-540px)";
    document.getElementById('img5').style.oTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 45) + "deg) translateZ(-540px)";
    document.getElementById('img6').style.oTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 67.5) + "deg) translateZ(-540px)";
    document.getElementById('img7').style.oTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 90) + "deg) translateZ(-540px)";
    document.getElementById('img8').style.oTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 112.5) + "deg) translateZ(-540px)";
    document.getElementById('img9').style.oTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 135) + "deg) translateZ(-540px)";
    document.getElementById('img10').style.oTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 157.5) + "deg) translateZ(-540px)";
    document.getElementById('img11').style.oTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 180) + "deg) translateZ(-540px)";
    document.getElementById('img12').style.oTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 202.5) + "deg) translateZ(-540px)";
    document.getElementById('img13').style.oTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 225) + "deg) translateZ(-540px)";
    document.getElementById('img14').style.oTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 247.5) + "deg) translateZ(-540px)";
    document.getElementById('img15').style.oTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 270) + "deg) translateZ(-540px)";
    document.getElementById('img16').style.oTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 292.5) + "deg) translateZ(-540px)";
    //------------------------------------------------------------
    document.getElementById('img1').style.mozTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px + 45) + "deg) translateZ(-540px)";
    document.getElementById('img2').style.mozTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px + 22.5) + "deg) translateZ(-540px)";
    document.getElementById('img3').style.mozTransform = "translateZ(" + (farpx ) + "px)rotateY(" + px + "deg) translateZ(-540px)";

    document.getElementById('img4').style.mozTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 22.5) + "deg) translateZ(-540px)";
    document.getElementById('img5').style.mozTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 45) + "deg) translateZ(-540px)";
    document.getElementById('img6').style.mozTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 67.5) + "deg) translateZ(-540px)";
    document.getElementById('img7').style.mozTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 90) + "deg) translateZ(-540px)";
    document.getElementById('img8').style.mozTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 112.5) + "deg) translateZ(-540px)";
    document.getElementById('img9').style.mozTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 135) + "deg) translateZ(-540px)";
    document.getElementById('img10').style.mozTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 157.5) + "deg) translateZ(-540px)";
    document.getElementById('img11').style.mozTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 180) + "deg) translateZ(-540px)";
    document.getElementById('img12').style.mozTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 202.5) + "deg) translateZ(-540px)";
    document.getElementById('img13').style.mozTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 225) + "deg) translateZ(-540px)";
    document.getElementById('img14').style.mozTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 247.5) + "deg) translateZ(-540px)";
    document.getElementById('img15').style.mozTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 270) + "deg) translateZ(-540px)";
    document.getElementById('img16').style.mozTransform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 292.5) + "deg) translateZ(-540px)";
    //------------------------------------------------------------
    document.getElementById('img1').style.transform = "translateZ(" + (farpx ) + "px)rotateY(" + (px + 45) + "deg) translateZ(-540px)";
    document.getElementById('img2').style.transform = "translateZ(" + (farpx ) + "px)rotateY(" + (px + 22.5) + "deg) translateZ(-540px)";
    document.getElementById('img3').style.transform = "translateZ(" + (farpx ) + "px)rotateY(" + px + "deg) translateZ(-540px)";

    document.getElementById('img4').style.transform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 22.5) + "deg) translateZ(-540px)";
    document.getElementById('img5').style.transform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 45) + "deg) translateZ(-540px)";
    document.getElementById('img6').style.transform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 67.5) + "deg) translateZ(-540px)";
    document.getElementById('img7').style.transform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 90) + "deg) translateZ(-540px)";
    document.getElementById('img8').style.transform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 112.5) + "deg) translateZ(-540px)";
    document.getElementById('img9').style.transform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 135) + "deg) translateZ(-540px)";
    document.getElementById('img10').style.transform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 157.5) + "deg) translateZ(-540px)";
    document.getElementById('img11').style.transform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 180) + "deg) translateZ(-540px)";
    document.getElementById('img12').style.transform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 202.5) + "deg) translateZ(-540px)";
    document.getElementById('img13').style.transform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 225) + "deg) translateZ(-540px)";
    document.getElementById('img14').style.transform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 247.5) + "deg) translateZ(-540px)";
    document.getElementById('img15').style.transform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 270) + "deg) translateZ(-540px)";
    document.getElementById('img16').style.transform = "translateZ(" + (farpx ) + "px)rotateY(" + (px - 292.5) + "deg) translateZ(-540px)";
    //------------------------------------------------------------
    px += 0.1;
    px -= targetRotation * 0.5;
    targetRotation += targetRotation * (-0.1);
}
       
