// "use client"

// import { useEffect, useRef } from 'react';

import { Button } from "./ui/button";

export default function Hero() {
  // const heroSectionRef = useRef(null);

  // useEffect(() => {
  //     const observer = new IntersectionObserver(
  //     (entries) => {
  //         entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //             document.querySelectorAll('.ball').forEach(ball => {
  //             ball.style.animationPlayState = 'running';
  //             });
  //         } else {
  //             document.querySelectorAll('.ball').forEach(ball => {
  //             ball.style.animationPlayState = 'paused';
  //             });
  //         }
  //         });
  //     },
  //     {
  //         threshold: 0.5,
  //     }
  //     );

  //     if (heroSectionRef.current) {
  //     observer.observe(heroSectionRef.current);
  //     }

  //     return () => {
  //     if (heroSectionRef.current) {
  //         observer.unobserve(heroSectionRef.current);
  //     }
  //     };
  // }, []);

  return (
    <section className="hero flex flex-col items-center justify-center gap-8 px-16 text-center md:gap-12 md:px-0">
      <h2 className="font-palomino">Mindful Living Made Easy</h2>
      <p className="custom-text text-sm text-muted-foreground md:w-1/2 md:text-lg">
        Take control of your life, cultivate mindfulness, and unlock your full
        potential. With practical guidance and powerful tools, we support you in
        tracking and managing the essential aspects of your life easily and
        efficiently.
      </p>
      <Button variant="custom" size="custom">
        Explore our Approach
      </Button>
      {/* 
      <div className="ball absolute animate-bounce-ball bottom-0 left-0 bg-red-500"></div>
      <div className="ball absolute animate-bounce-ball bottom-0 left-1/4 bg-green-500"></div>
      <div className="ball absolute animate-bounce-ball bottom-0 left-1/2 bg-yellow-500"></div> */}
    </section>
  );
}
