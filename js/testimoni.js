
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

let paket = [
    {
        img: "./asset/paket/skd.png",
        title: "SKD",
        subtitle: "Umum (TWK, TIU, TKP)",
    },
    {
        img: "./asset/paket/skb.png",
        title: "SKB",
        subtitle: "SKB Formasi Dosen",
    },
    {
        img: "https://privatalfaiz.id/assets/images/icon-pppk-new.png",
        title: "PPPK",
        subtitle: "PPPK Formasi Dosen dan <br> PPPK Arsiparis",
    },
    {
        img: "./asset/paket/mapel.png",
        title: "Bimbingan Belajar",
        subtitle: "Mata Pelajaran Sekolah",
    },
];

let brosur = [
    {
        img: './asset/brosur/brosur-1.jpeg',
        link: 'https://wa.me/6287827773593'
    },
    {
        img: './asset/brosur/brosur-3.jpeg',
        link: 'https://bit.ly/WebinarKI25Agustus24'
    },
    {
        img: './asset/brosur/brosur-2.jpeg',
        link: null
    },
];


testimoni.map(item => $('#testimoni').append(
    `
    <div class="w-full shadow-[0px_0px_8px_0px_rgba(0,0,0,0.10)] mx-4" style="display: flex; flex-direction: column; border-radius: 20px; overflow: hidden;">
        <div class="w-full h-64 md:h-80 lg:h-96">
            <img src="${item.img}" alt="Testimoni" class="w-full h-full object-contain">
        </div>
    </div>
    `
));

brosur.map(item => {
    const buttonLabel = item.link ? 'Daftar Sekarang' : 'Tidak Tersedia';
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

paket.map(item => $('#paket').append(
    `
    <div class="w-[350px] h-[149.5px] rounded-3xl shadow-[0px_0px_8px_0px_rgba(0,0,0,0.10)] flex justify-start items-center gap-5 pl-6 hover:bg-yellow-400 hover:text-white cursor-pointer group transition-all">
        <div class="bg-white rounded-full p-2 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.10)]">
            <img src="${item.img}" alt="" class="w-[44px] h-[44px]">
        </div>
        <div class="flex flex-col gap-3">
            <h4 class="text-[24px]">${item.title}</h4>
            <p class="text-[14px] text-[#999999] group-hover:text-white">${item.subtitle}</p>
        </div>
    </div>
    `
));


