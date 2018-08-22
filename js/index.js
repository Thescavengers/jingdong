var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: true,
    loop:true,
    autoplay:true,
    slidesPerGroup:3,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
(function f() {
    let winH = utils.win('clientHeight');
    let area = document.getElementsByClassName('area')[0];
    let imgs = area.getElementsByTagName('img');
    console.log(imgs);
    let frames = document.getElementsByClassName('frames');
    let frame = document.getElementsByClassName('frame');
    window.onscroll = scroll;
    function scroll() {
        let winT = utils.win('scrollTop');
        for (let i = 0; i < frames.length; i++) {
            if(frames[i].flag){
                continue;
            }
            let framesT = utils.offset(frames[i]).top;
            let framesH = frames[i].offsetHeight;
            if (winT+winH>framesT+framesH){
                frames[i].style.display = "block";
                frame[i].style.background = "none";
                frames[i].flag = true;
            }
        };
        for (let i = 0; i < imgs.length; i++) {
            if (imgs[i].flag){
                continue
            }
            imgs[i].T = utils.offset(imgs[i]).top;
            let H = imgs[i].offsetHeight;
            console.log(H);
            if(winH+winT>imgs[i].T+H){
                imgs[i].style.opacity = 1;
                imgs[i].flag = true;
            }else {
                imgs[i].style.opacity = 0;
            }
        }
    }
})();
