import image1 from "../assets/figma/Hero section - Alexy 900.webp"
import image2 from "../assets/figma/Hero section - Ruben.webp"
import image3 from "../assets/figma/SCR-20240819-qytb.webp"
import image5 from "../assets/figma/SCR-20240915-jhsy.webp"
import image6 from "../assets/figma/SCR-20240915-jjjh.webp"
import image7 from "../assets/figma/SCR-20240915-jphf.webp"
import image8 from "../assets/figma/SCR-20241224-sfpy.webp"
import image4 from "../assets/figma/SCR-20241224-sfts.webp"

import ImageCard from "./ImageCard"
import { useEffect, useRef } from "react"
import gsap from "gsap"


function FigmaInfinite() {
    const images = [
        image1, image2, image3, image4, image5,
        image6, image7, image8
    ];

    const containerRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const slider = sliderRef.current;
        const container = containerRef.current;
        if (!slider || !container) return;

        // Calculer la largeur totale du premier set d'images
        const totalWidth = slider.children[0].clientWidth * images.length;
        
        // Reset position
        gsap.set(slider, { x: 0 });

        // Créer l'animation
        const animation = gsap.to(slider, {
            x: -totalWidth,
            duration: 40,
            ease: "none",
            repeat: -1,
            onRepeat: () => {
                gsap.set(slider, { x: 0 });
            }
        });

        return () => {
            animation.kill();
        };
    }, [images]);

    return (
        <div className="relative w-full align-middle overflow-hidden order-first md:col-span-2 lg:col-span-3 h-64 lg:order-1" ref={containerRef}>
            <div 
                ref={sliderRef} 
                className="flex gap-4 absolute left-0 h-full"
            >
                {images.map((img, index) => (
                    <ImageCard key={`img-${index}`} img={img} />
                ))}
                {images.map((img, index) => (
                    <ImageCard key={`img-dup-${index}`} img={img} />
                ))}
            </div>

            <div className="absolute w-4 left-0 top-0 bottom-0 bg-gradient-to-r from-[#0F0B0F] to-transparent"></div>
            <div className="absolute w-4 right-0 top-0 bottom-0 bg-gradient-to-l from-[#0F0B0F] to-transparent"></div>
        </div>
    );
}


export default FigmaInfinite;