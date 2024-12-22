import { useEffect, useRef } from "react";
import gsap from 'gsap';

interface AnimationProps {
  children: React.ReactNode;
}

function AnimatedContainer({ children }: AnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current,
        {
          filter: "blur(20px)",
          opacity: 0
        },
        {
          filter: "blur(0px)",
          opacity: 1,
          duration: 1.5,
          ease: "power2.out"
        }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-center p-4 max-w-[1200px] mx-auto">
      {children}
    </div>
  );
}

export default AnimatedContainer;
