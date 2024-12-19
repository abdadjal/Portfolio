import './App.css'
import pfp from './assets/pfp.jpeg'
import github from './assets/github.svg'
import githubDark from './assets/github-mark.svg'
import social from './assets/social.webp'
import nyrolaw from './assets/nyrolaw.webp'
import ai from './assets/ai.webp'
import calc from './assets/calc.webp'
import drum from './assets/drum.webp'
import quote from './assets/quote.webp'
import pomo from './assets/pomo.webp'
import mark from './assets/mark.webp'
import figma from './assets/figma.webp'
import resume from './assets/resume.pdf'
import lp from './assets/lp.webp'
import gsap from 'gsap';
import { useEffect } from 'react';





function App() {

  useEffect(() => {
    gsap.fromTo(".anim",
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
  }, []);

  return (
    <div className='flex flex-col items-center p-4 max-w-[1200px] mx-auto anim'>
      <div className='hero-wrapper bg-cover py-20 px-[5%] flex justify-center rounded-2xl w-full relative'>
      <div className="bg-gradient-to-b from-transparent to-[#0F0B0F] h-12 bottom-0 z-10 w-full absolute"></div>
        <div className='flex gap-3 max-w-xl flex-col items-center md:gap-4'>
          <div className='relative'>
            <img src={pfp} className='w-20 md:w-28 lg:w-36 rounded-full'/>
            <a href='https://github.com/abdadjal'>
              <img src={github} className='size-6 rounded-full absolute bottom-[-3%] right-[5%] backdrop-blur-md md:size-8 lg:size-10 md:bottom-[-1%] md:right[7%] duration-300 hover:opacity-80'/>
            </a>
          </div>
          <div className='flex flex-col items-center gap-2 lg:gap-3'>
            <h1 className='text-[28px] font-medium tracking-tight leading-[1.1] md:text-3xl lg:text-5xl'>Abderahman Adjal</h1>
            <p className=' text-[0.9rem] font-medium md:text-lg lg:text-xl'>Développeur Web Junior | Alternance</p>
          </div>
          <a className='flex items-center gap-[0.35rem] px-3 py-1 bg-black ring-1 ring-white ring-opacity-15 rounded-full hover:ring-opacity-30 transition-all duration-300 text-sm' href={resume} download="resume.pdf" rel="noopener noreferrer" target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-down-to-line"><path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/></svg>
              <div>Télécharger mon CV</div>
            </a>
            <a className='flex items-center gap-[0.35rem] px-3 py-1 bg-white text-black ring-1 ring-white ring-opacity-15 rounded-full hover:opacity-80 transition-all duration-300 text-sm mt-[-0.5rem]' href='https://github.com/abdadjal' target='_blank'>
              <img src={githubDark} className='size-[15px]'/>
              <div>Github</div>
            </a>
        </div>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-12 px-[5%] w-full'>

      <div className="rounded-lg ring-1 ring-white ring-opacity-10 p-4 bg-[rgba(255,255,255,0.05)] flex flex-col gap-4">
          <img src={ai} className='rounded-lg'/>
          <div className='flex flex-col items-start gap-3 max-w-[24rem]'>
            <h3 className='text-xl font-medium'>Ai Summarizer - React</h3>
            <a className='flex items-center gap-[0.35rem] px-2 py-1 bg-white text-black rounded hover:opacity-80 transition-all duration-300 text-sm' href='https://whoisabd-ai-summarizer.netlify.app/' target='_blank'>
              <div>Consulter</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            </a>
          </div>
        </div>

        <div className="rounded-lg ring-1 ring-white ring-opacity-10 p-4 bg-[rgba(255,255,255,0.05)] flex flex-col gap-4">
          <img src={social} className='rounded-lg'/>
          <div className='flex flex-col items-start gap-3 max-w-[24rem]'>
            <h3 className='text-xl font-medium'>Stam Social - HTML, CSS, JS</h3>
            <a className='flex items-center gap-[0.35rem] px-2 py-1 bg-white text-black rounded hover:opacity-80 transition-all duration-300 text-sm' href="https://stam.social" target="_blank">
              <div>Consulter</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            </a>
          </div>
        </div>

        <div className="rounded-lg ring-1 ring-white ring-opacity-10 p-4 bg-[rgba(255,255,255,0.05)] flex flex-col gap-4">
          <img src={calc} className='rounded-lg'/>
          <div className='flex flex-col items-start gap-3 max-w-[24rem]'>
            <h3 className='text-xl font-medium'>Apple Calculator - React</h3>
            <a className='flex items-center gap-[0.35rem] px-2 py-1 bg-white text-black rounded hover:opacity-80 transition-all duration-300 text-sm' href="https://abdadjal.github.io/Javascript-Calculator/" target="_blank">
              <div>Consulter</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            </a>
          </div>
        </div>

        <div className="rounded-lg ring-1 ring-white ring-opacity-10 p-4 bg-[rgba(255,255,255,0.05)] flex flex-col gap-4">
          <img src={nyrolaw} className='rounded-lg'/>
          <div className='flex flex-col items-start gap-3 max-w-[24rem]'>
            <h3 className='text-xl font-medium'>Nyrolaw - HTML,CSS, JS</h3>
            <a className='flex items-center gap-[0.35rem] px-2 py-1 bg-white text-black rounded hover:opacity-80 transition-all duration-300 text-sm' href="https://nyrolaw.be" target="_blank">
              <div>Consulter</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            </a>
          </div>
        </div>

        <div className="rounded-lg ring-1 ring-white ring-opacity-10 p-4 bg-[rgba(255,255,255,0.05)] flex flex-col gap-4">
          <img src={quote} className='rounded-lg'/>
          <div className='flex flex-col items-start gap-3 max-w-[24rem]'>
            <h3 className='text-xl font-medium'>Random Quote Generator - React</h3>
            <a className='flex items-center gap-[0.35rem] px-2 py-1 bg-white text-black rounded hover:opacity-80 transition-all duration-300 text-sm' href="https://abdadjal.github.io/Random-Quote-Generator/" target="_blank">
              <div>Consulter</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            </a>
          </div>
        </div>

        <div className="rounded-lg ring-1 ring-white ring-opacity-10 p-4 bg-[rgba(255,255,255,0.05)] flex flex-col gap-4">
          <img src={figma} className='rounded-lg'/>
          <div className='flex flex-col items-start gap-3 max-w-[24rem]'>
            <h3 className='text-xl font-medium'>Landing page - Figma</h3>
            <a className='flex items-center gap-[0.35rem] px-2 py-1 bg-white text-black rounded hover:opacity-80 transition-all duration-300 text-sm' href={lp} target="_blank">
              <div>Consulter</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            </a>
          </div>
        </div>

        <div className="rounded-lg ring-1 ring-white ring-opacity-10 p-4 bg-[rgba(255,255,255,0.05)] flex flex-col gap-4">
          <img src={drum} className='rounded-lg'/>
          <div className='flex flex-col items-start gap-3 max-w-[24rem]'>
            <h3 className='text-xl font-medium'>Drum Machine - React</h3>
            <a className='flex items-center gap-[0.35rem] px-2 py-1 bg-white text-black rounded hover:opacity-80 transition-all duration-300 text-sm' href="https://abdadjal.github.io/Drum-Machine/" target="_blank">
              <div>Consulter</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            </a>
          </div>
        </div>

        <div className="rounded-lg ring-1 ring-white ring-opacity-10 p-4 bg-[rgba(255,255,255,0.05)] flex flex-col gap-4">
          <img src={mark} className='rounded-lg'/>
          <div className='flex flex-col items-start gap-3 max-w-[24rem]'>
            <h3 className='text-xl font-medium'>Markdown Previewer - React</h3>
            <a className='flex items-center gap-[0.35rem] px-2 py-1 bg-white text-black rounded hover:opacity-80 transition-all duration-300 text-sm' href="https://abdadjal.github.io/Markdown-Previewer/" target="_blank">
              <div>Consulter</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            </a>
          </div>
        </div>

        <div className="rounded-lg ring-1 ring-white ring-opacity-10 p-4 bg-[rgba(255,255,255,0.05)] flex flex-col gap-4">
          <img src={pomo} className='rounded-lg'/>
          <div className='flex flex-col items-start gap-3 max-w-[24rem]'>
            <h3 className='text-xl font-medium'>Pomodoro - React</h3>
            <a className='flex items-center gap-[0.35rem] px-2 py-1 bg-white text-black rounded hover:opacity-80 transition-all duration-300 text-sm' href="https://abdadjal.github.io/25-5-Clock/" target="_blank">
              <div>Consulter</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
