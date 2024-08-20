const noResetScroll = ScrollReveal({
    distance: '60px',
    duration: 2800,
})

noResetScroll.reveal('.logo', {
    origin:'top',
    interval: 700,
});
noResetScroll.reveal('.img_responsive', {
    origin: 'right',
    interval: 1000,
});

const titlesRevealScroll = ScrollReveal({
    distance: '60px',
    duration: 2800,
})

titlesRevealScroll.reveal('.board',{
    origin:'top',
    interval: 700,
});

const resetScroll = ScrollReveal({
    distance: '60px',
    duration: 1500,
    reset: true,
});

resetScroll.reveal('.doc-card-1',{
    delay: 200,
    opacity: 0,
});
resetScroll.reveal('.doc-card-2',{
    delay: 400,
    opacity: 0,
});
resetScroll.reveal('.doc-card-3',{
    delay: 600,
    opacity: 0,
});
resetScroll.reveal('.titlepage',{
    delay: 400,
    opacity: 0,
})


const aboutImg = ScrollReveal({
    duration: 3000,
    reset:true,
});

aboutImg.reveal('.about_img',{
    origin: 'top',
    delay: 500,
    opacity: 0,
})

aboutImg.reveal('.activities_img',{
    origin: 'left',
    delay: 500,
    opacity: 0,
})
