import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../../assets/logo2.png";

export default function Intro({ onComplete }) {
  const layer1Ref = useRef();
  const blackBgRef = useRef();
  const whiteCircleRef = useRef();

 useEffect(() => {
  const tl = gsap.timeline({
    onComplete: onComplete,
  });

  onComplete: () => {
  if (containerRef.current) containerRef.current.style.display = "none";
  onComplete(); 
}

  tl.fromTo(
    layer1Ref.current.querySelector("img"), 
    { scale: 0 },
    {
      duration: 0.6,
      scale: 1.1,
      ease: "back.out(1.7)",
    }
  )
  .to(
    layer1Ref.current.querySelector("img"),
    {
      duration: 0.3,
      scale: 1,
      ease: "power1.out",
    },
    ">"
  )

 
  .to(layer1Ref.current, {
    duration: 1,
    y: "-100%",
    opacity: 0,
    ease: "power2.inOut",
    delay: 1.5, 
  })

  
  .to(
    whiteCircleRef.current,
    {
      duration: 1.5,
      ease: "power2.inOut",
      scale: 15,
      opacity: 0,
      transformOrigin: "50% 50%",
    },
    ">0.2"
  )
  .to(
    blackBgRef.current,
    {
      duration: 1.5,
      ease: "power2.inOut",
      opacity: 0,
    },
    "<"
  );
}, [onComplete]);


  return (
    <>
      <div
        ref={layer1Ref}
        className="fixed inset-0 !bg-primary flex flex-col items-center justify-center text-black z-52"
      >
        <img src={logo} width={176} height={176} alt="Logo" />
      </div>

      <div
        ref={blackBgRef}
        className="fixed inset-0 bg-black z-51 flex items-center justify-center"
        style={{ opacity: 1 }}
      >
        <div
          ref={whiteCircleRef}
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            backgroundColor: "white",
            transform: "scale(0)",
            opacity: 1,
          }}
        />
      </div>
    </>
  );
}
