window.onload = function () {
    setInterval(() => {
        chnageHeadingColor();        
    }, 200);       

    
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
    });
}

function chnageHeadingColor() {
    var headingCoden = document.getElementById("heading");
    var color = getRendomColor();
    headingCoden.style.color= color;
}

function getRendomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
