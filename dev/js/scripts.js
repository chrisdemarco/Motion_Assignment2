
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);


let mainTL = gsap.timeline();
    
    function line(){

        const tl = gsap.timeline();

        tl.from("#line", {duration: 2, alpha: 0});
                    
        return tl;     
    }

    function circles(){

        const tl = gsap.timeline();

        tl.from("#circle1", {duration: 2, alpha: 0, y: 1000})
        tl.from("#circle2", {duration: 2, alpha: 0, x: 1000})
        tl.from("#circle3", {duration: 2, alpha: 0, y: -1000})
        tl.from("#circle4", {duration: 2, alpha: 0, x: -1000});
                    
        return tl;     
    }

mainTL.add(line())
      .add(circles());


GSDevTools.create();
