var lastmouseXdistance;
function keylisten() {

    window.onkeydown = function () {

        var e = window.event || arguments[0], k = e.keyCode || e.which;
        switch (k) {
            case 65:  //down arrow
                px += 1;
                break;
            case 66:  //down arrow
                px -= 1;
                break;


        }
    }
}


function onDocumentMouseDown(event) {

    event.preventDefault();

    document.getElementById("Figure").addEventListener('mousemove', onDocumentMouseMove, false);
    document.getElementById("Figure").addEventListener('mouseup', onDocumentMouseUp, false);
    document.addEventListener('mouseout', onDocumentMouseOut, false);

    mouseXOnMouseDown = event.clientX;

    lastmouseX = event.clientX;
}

function onDocumentMouseMove(event) {

    mouseX = event.clientX;

    targetRotation = ( mouseX - lastmouseX );
    lastmouseX = event.clientX;
}

function onDocumentMouseUp(event) {

    document.getElementById("Figure").removeEventListener('mousemove', onDocumentMouseMove, false);
    document.getElementById("Figure").removeEventListener('mouseup', onDocumentMouseUp, false);
    document.removeEventListener('mouseout', onDocumentMouseOut, false);

}

function onDocumentMouseOut(event) {


}

function onDocumentTouchStart(event) {
    event.preventDefault();
    if (event.touches.length === 1) {
        lastmouseX = event.touches[0].pageX
    }
    if (event.touches.length === 2) {
        lastmouseX1 = event.touches[0].pageX;
        lastmouseX2 = event.touches[1].pageX;
        lastmouseXdistance = Math.abs(lastmouseX1 - lastmouseX2);
    }

}

function onDocumentTouchMove(event) {
    event.preventDefault();
    if (event.touches.length === 1) {


        mouseX = event.touches[0].pageX;
        targetRotation = ( mouseX - lastmouseX );
        if (targetRotation > 10)targetRotation = 10;
        if (targetRotation < -10)targetRotation = -10;
        lastmouseX = event.touches[0].pageX;
    }
    if (event.touches.length === 2) {
        lastmouseX1 = event.touches[0].pageX;
        lastmouseX2 = event.touches[1].pageX;
        mouseXdistance = Math.abs(lastmouseX1 - lastmouseX2);
        farpxnext = farpx + (mouseXdistance - lastmouseXdistance);
        if (farpxnext < ((1 - (250 / windowheight)) * 1000) + 540 && farpxnext > farpxmax) {
            farpx = farpxnext;
        }

    }

}