count = 0;
document.getElementById('menubutton').addEventListener('click', function () {
    // console.log('1');
    arrbt = ["none", "block"];
    if (count < 1) {
        count++;
    }
    else {
        count = 0;
    }
    var btmenu = document.getElementById("menu");
    btmenu.style.display = arrbt[count];
});

function opacityContent() {
    var content = document.getElementById("content");
    if (content.className === "offset-2a col-6 col-sm-11 offset-sm-2a mt-sm-4") {
        content.className += " opa";
    } else {
        content.className = "offset-2a col-6 col-sm-11 offset-sm-2a mt-sm-4";
    }
}
function opacityContent1() {
    var content1 = document.getElementById("content1");
    if (content1.className === "offset-2a col-9 col-sm-11 offset-sm-2a mt-sm-4") {
        content1.className += " opa";
    } else {
        content1.className = "offset-2a col-9 col-sm-11 offset-sm-2a mt-sm-4";
    }
}


//Slider
var images = document.getElementsByClassName("slider")[0].getElementsByTagName("img");
var title = document.getElementById("titleSlider");
var lstBtn = document.getElementsByClassName("slider")[0].getElementsByTagName("button");
var call = true;
function initSlider() {
    images[indexCurrent].style.opacity = 1;
    title.innerText = images[indexCurrent].getAttribute("title");
    if (showbutton == false) {
        var lengthButton = lstBtn.length;
        for (i = 0; i < lengthButton; i++) {
            lstBtn.item(0).remove();
        }
    }
    if (loop) {
        setInterval(getNextImage, duration);
    }

}

function setImage(indexOld) {

    for (i = 0; i < images.length; i++) {
        if (i != indexOld)
            images[i].style.opacity = 0;
    }
    var opacity = 0;
    var opacityImageOld = 1;
    var setOpacity = setInterval(function () {

        images[indexCurrent].style.opacity = opacity;
        images[indexOld].style.opacity = opacityImageOld;
        title.innerText = images[indexCurrent].getAttribute("title");
        if (opacity >= 1 && opacityImageOld <= 0) {
            call = true;
            clearInterval(setOpacity);
            return;
        }
        opacity += 0.02;
        opacityImageOld -= 0.02;

    }, duration / 100);

}

function getNextImage() {

    if (call == false) {
        return;
    }
    if (indexCurrent == images.length - 1) {
        indexCurrent = 0;
        setImage(images.length - 1);
    }
    else {

        indexCurrent++;
        setImage(indexCurrent - 1);
    }
    call = false;
}

function getPrevImage() {

    if (call == false) {
        return;
    }
    if (indexCurrent == 0) {
        indexCurrent = images.length - 1;
        setImage(0);
    }
    else {

        indexCurrent--;
        setImage(indexCurrent + 1);
    }
    call = false;
}
//Sign In
function signin() {
    var btsignin = document.getElementById("Sign");
    btsignin.style.display = "block";
    var container = document.getElementById("container");
    container.style.opacity = "0.2";
}

function hideSignin() {
    var hidesignin = document.getElementById("Sign");
    hidesignin.style.display = "none";
    var container = document.getElementById("container");
    container.style.opacity = "10";
}
//Listen
// function listen() {
//     var listen = document.getElementsByTagName("p").getElementsByClassName("song-title");
//     console.log(listen.innerText)
// }
