interface propsImage {
img: string;
}


function ImageCard(props: propsImage) {
    return (
        <div className="shrink-0 h-full py-1 transition-transform duration-300">
            <img 
                src={props.img} 
                className="aspect-video object-cover h-full w-full object-top rounded-lg ring-1 ring-white ring-opacity-10"
                alt="Design work"
                loading="eager"
            />
        </div>
    );
}


export default ImageCard;