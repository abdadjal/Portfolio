import resume from './assets/resume.pdf'
import pfp from './assets/pfp.jpeg'
import github from './assets/github.svg'
import githubDark from './assets/github-mark.svg'

function Header() {
    return(
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
            <h1 className='text-[28px] font-medium tracking-tight leading-[1.1] md:text-3xl lg:text-5xl text-center'>Abderahman Adjal</h1>
            <p className=' text-[0.9rem] font-medium md:text-lg lg:text-xl text-center'>Développeur Front-end | React & Typescript</p>
          </div>
          <a className='flex items-center gap-[0.35rem] px-3 py-1 bg-black ring-1 ring-white ring-opacity-15 rounded-full hover:ring-opacity-30 transition-all duration-300 text-sm' href={resume} download="resume.pdf" rel="noopener noreferrer" target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-down-to-line"><path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/></svg>
              <div>Télécharger mon CV</div>
            </a>
            <a className='flex items-center gap-[0.35rem] px-3 py-1 bg-white text-black ring-1 ring-white ring-opacity-15 rounded-full hover:opacity-80 transition-all duration-300 text-sm mt-[-0.25rem] md:mt-[-0.5rem]' href='https://github.com/abdadjal' target='_blank'>
              <img src={githubDark} className='size-[15px]'/>
              <div>Github</div>
            </a>
        </div>
      </div>
    );
}

export default Header;