interface propsImage {
img: string;
}


function ImageCard(props: propsImage) {
    return (
        <div className="shrink-0 h-full py-1 transition-transform duration-300">
            <img 
                src={props.img} 
                className="h-full w-auto max-h-[250px] md:max-h-full object-cover rounded-lg ring-1 ring-white ring-opacity-10"
                alt="Design work"
                loading="eager"
            />
        </div>
    );
}



export default ImageCard;