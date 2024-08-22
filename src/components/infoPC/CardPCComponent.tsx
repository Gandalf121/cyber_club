type CardPCComponentProps={
    img:string;
    title:string;
}

export function CardPCComponent({img,title}: CardPCComponentProps) {
    return (
            <div style={{margin:"1rem"}}>
                <img src={img} alt=""/>
                <p>{title}</p>
            </div>
    );
}
