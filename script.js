let menulist = document.querySelector(".nav-part2")
let menubtn = document.querySelector(".menubutton ")

let flag = 0

menubtn.addEventListener("click", () => {
    if (flag == 0) {
        menulist.style.display = "block"
        flag = 1
    }
    else {
        menulist.style.display = "none"
        flag = 0
    }
})

let tl = gsap.timeline()

tl.from("h2",{
    y:-20,
    opacity:0,
    duration:0.5,
    delay:0.2
})

tl.from("h4",{
    y:-20,
    opacity:0,
    duration:0.2,
    delay:0.2,
    stagger:0.5
})
tl.from("#btnnav",{
    
    opacity:0,
    duration:0.5,
    delay:0.2
})

tl.from("h1",{
    x:-20,
    opacity:0,
    duration:0.2,
    delay:0,
    
},'b')
tl.from("img",{
    y:-20,
    opacity:0,
    duration:0.2,
    delay:0,
    
},'b')
tl.from("span",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5,
    scale:0.3
})
tl.from(".prag",{
    
    opacity:0,
    duration:0.2,
    delay:0,
    
})
tl.from("#btn",{
    
    opacity:0,
    duration:0.5,
    delay:0
})

var tll = gsap.timeline({scrollTrigger:{
    trigger:".main2",
    // markers:true,
    start:"50% 50%",
    end:"100% 50%",
    scrub:2,
    pin:true
}});

tll.to(".top",{
    top:"-100%"
},'a')
tll.to(".bottom",{
    bottom:"-50%"
},'a')

gsap.to("#page2 h1",{
    transform: "translateX(-100%)",
    scrollTrigger:{
        trigger:"#page2 ",
        scroller:"body",
        marker:true,
        start:"top 0%",
        end:"top -150%",
        scrub:3,
        pin:true
    }
    
    
})


var initialPath = `M 10 100 Q 250 100 590 100`

var finalPath =`M 10 100 Q 500 100 990 100`

var string = document.querySelector("#string")


string.addEventListener("mouseenter",function(){
    console.log("entered")
})
string.addEventListener("mouseleave",function(){
    console.log("leaved")
})

string.addEventListener("mousemove",function(dets) {
    Path = `M 10 100 Q ${dets.x} ${dets.y} 790 100`

    gsap.to("svg path", {
        attr:{ d: Path},
        duration:2,
        ease:"power3.out"
    })
})

string.addEventListener("mouseleave",function() {

    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:2.5,
        ease:"elastic.out(1,0.2)"
    })
})

