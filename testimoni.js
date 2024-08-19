
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
        img: './asset/testimoni/amalia.jpeg'
    },
    {
        img: './asset/testimoni/erin.jpeg'
    },
    {
        img: './asset/testimoni/fatin.jpeg'
    },
    {
        img: './asset/testimoni/indah.jpeg'
    },
    {
        img: './asset/testimoni/putri.jpeg'
    },
    {
        img: './asset/testimoni/reisya.jpeg'
    },
    {
        img: './asset/testimoni/tindaon.jpeg'
    },
    {
        img: './asset/testimoni/ulina.jpeg'
    },
    {
        img: './asset/testimoni/indriyani.jpeg'
    },
];

let brosur = [
    {
        img: './asset/brosur/brosur-1.jpeg'
    },
    {
        img: './asset/brosur/brosur-2.jpeg'
    },
    {
        img: './asset/brosur/brosur-3.jpeg'
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

brosur.map(item => $('#brosur').append(
    `
    <div class="max-w-4xl mx-auto">
        <img 
        src="${item.img}" 
        alt="Brosur Kalijaga Institute" 
        class="w-full h-auto rounded-lg shadow-lg"
        loading="lazy"
        />
    </div>
    `
));



