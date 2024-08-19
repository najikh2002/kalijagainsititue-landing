
$(document).ready(function(){
    var slidesToShow = 1;
    if ($(window).width() >= 768) {
        slidesToShow = 2;
    }

    $('#testimoni').slick({
        infinite: true,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToShow,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });
});

$(window).resize(function(){
    var slidesToShow = 1;
    if ($(window).width() >= 768) {
        slidesToShow = 2;
    }

    $('#testimoni').slick('slickSetOption', 'slidesToShow', slidesToShow, true);
    $('#testimoni').slick('slickSetOption', 'slidesToScroll', slidesToShow, true);
});

let testimoni = [
    {
        img: './asset/testimoni/brezto.jpeg'
    },
    {
        img: './asset/testimoni/mina.jpeg'
    },
    {
        img: './asset/testimoni/indriyani.jpeg'
    },
];


testimoni.map(item => $('#testimoni').append(
    `
    <div class="w-[300px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.10)] m-3" style="display: flex;flex-direction:column;border-radius: 20px;overflow:hidden;">
        <div class="w-full">
            <img src="${item.img}" alt="Testimoni" class="w-full h-auto">
        </div>
       
    </div>
    `
));



