import Card from './Card';
import social from '../assets/social.webp'
import ai from '../assets/ai.webp';
import calc from '../assets/calc.webp';
import drum from '../assets/drum.webp';
import quote from '../assets/quote.webp';
import pomo from '../assets/pomo.webp';
import mark from '../assets/mark.webp';


function Cards() {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-12 px-[5%] w-full'>
          <Card title={"Ai Summarizer - React, Tailwind, Redux, OpenAI API"} link={"https://whoisabd-ai-summarizer.netlify.app/"} image={ai}/>
          <Card title={"Stam Social - HTML, CSS, JS"} link={"https://stam.social"} image={social}/>
         <Card title={"Apple Calculator - React, CSS"} link={"https://abdadjal.github.io/Javascript-Calculator/"} image={calc}/>
         <Card title={"Random Quote Generator - React, CSS"} link={"https://abdadjal.github.io/Random-Quote-Generator/"} image={quote}/>
         <Card title={"Drum Machine - React, CSS"} link={"https://abdadjal.github.io/Drum-Machine/"} image={drum}/>
          <Card title={"Markdown Previewer - React, CSS"} link={"https://abdadjal.github.io/Markdown-Previewer/"} image={mark}/>
          <Card title={"Pomodoro - React, CSS"} link={"https://abdadjal.github.io/25-5-Clock/"} image={pomo}/>
      </div>
    );
}

export default Cards;