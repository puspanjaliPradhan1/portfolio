var tl=gsap.timeline()
tl.from(".left h2,.left h1,.left p,.left #links",{
    y:100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.5  
})

tl.from(".right>img",{
   scale:0,
   opacity:0,
})
