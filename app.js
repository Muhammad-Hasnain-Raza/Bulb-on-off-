function turnOnOff() {
    let image = document.getElementById('Image');
    if (image.src.match("bulbon"))
        image.src ="bulboff.jpg";
    else
        image.src ="bulbon.jpg";
}