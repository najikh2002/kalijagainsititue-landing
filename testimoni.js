
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
        img: './asset/brosur/brosur-1.jpeg',
        link: null
    },
    {
        img: './asset/brosur/brosur-2.jpeg',
        link: null 
    },
    {
        img: './asset/brosur/brosur-3.jpeg',
        link: 'https://bit.ly/WebinarKI25Agustus24'
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

brosur.map(item => {
    const buttonLabel = item.link ? 'Daftar Sekarang' : 'Segera Hadir';
    const buttonClass = item.link ? 'bg-yellow-500 hover:bg-yellow-600 text-white' : 'bg-gray-400 text-white cursor-not-allowed';
    const buttonLink = item.link ? `href="${item.link}"` : '';

    $('#brosur').append(
        `
        <div class="max-w-4xl mx-auto mb-4">
            <img 
            src="${item.img}" 
            alt="Brosur Kalijaga Institute" 
            class="w-full h-auto rounded-lg shadow-lg mb-2"
            loading="lazy"
            />
            <a ${buttonLink} class="block text-center py-2 px-4 rounded ${buttonClass}">
                ${buttonLabel}
            </a>
        </div>
        `
    );
});



