interface CardProps {
    title: string;  
    link: string;
    image: string;
    first?: boolean;
  }
  
  function Card(props: CardProps) {
    return (
      props.first ? 
        <div className="rounded-lg ring-1 ring-white ring-opacity-10 p-4 bg-[rgba(255,255,255,0.05)] flex flex-col gap-4 lg:order-first">
          <img src={props.image} className='rounded-lg'/>
          <div className='flex flex-col items-start gap-3 max-w-[24rem]'>
            <h3 className='text-xl font-medium'>{props.title}</h3>
            <a className='flex items-center gap-[0.35rem] px-2 py-1 bg-white text-black rounded hover:opacity-80 transition-all duration-300 text-sm' href={props.link} target="_blank">
              <div>Consulter</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            </a>
          </div>
        </div> 

        : 
        <div className="rounded-lg ring-1 ring-white ring-opacity-10 p-4 bg-[rgba(255,255,255,0.05)] flex flex-col gap-4 order-2">
          <img src={props.image} className='rounded-lg'/>
          <div className='flex flex-col items-start gap-3 max-w-[24rem]'>
            <h3 className='text-xl font-medium'>{props.title}</h3>
            <a className='flex items-center gap-[0.35rem] px-2 py-1 bg-white text-black rounded hover:opacity-80 transition-all duration-300 text-sm' href={props.link} target="_blank">
              <div>Consulter</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            </a>
          </div>
        </div> 

    )
  }

  export default Card