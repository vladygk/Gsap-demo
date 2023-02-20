import './style.scss'
import {gsap} from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
"use strict"
gsap.registerPlugin(MotionPathPlugin);
let tl = gsap.timeline({  paused:true,
  defaults: 
    {duration: 2, ease: "power1.inOut", yoyo: true}
})

  .to("#cr1", {x: 500})
  .to("#cr2", {x: 461.94, y: -191.64}, "<0.25")
  .to("#cr3", {x: 353.55, y: -353.56}, "<0.25")
  .to("#cr4", {x: 191.34, y: -461.94}, "<0.25")
  .to("#cr5", {y: -500}, "<0.25")
  .to("#cr6", {x: -191.35, y: -461.94}, "<0.25")
  .to("#cr7", {x: -353.55, y: -353.56}, "<0.25")
  .to("#cr8", {x: -461.94, y: -191.34}, "<0.25")

document.addEventListener("click", function(e) {
 
  tl.play(); 
});
document.addEventListener("dblclick", function(e) {
  tl.reverse(); 
});



const onMouseMove = (e) =>{


gsap.to('#circle',{x:e.pageX,y:e.pageY,duration:0.3,ease:"none"})
console.log(e.pageY);
}


const initial = (e)=>{
  gsap.set('#cirle',{y:e.clientY,x:e.clientX });

}
const body = document.getElementsByTagName("body")[0];
body.addEventListener("load", initial);

document.addEventListener('mousemove', onMouseMove);






