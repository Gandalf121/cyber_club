import {useParams} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks.ts";


export function NewsItem(){
    const { id } = useParams();
    const allNewsItems = useAppSelector(selector=>selector.news.allNews);
    const news = allNewsItems.find(item=>item.id === Number(id));
    if(news){
        return (
            <div className="news">
                <div style={{marginTop: "10rem"}}>
                    <h1>{news.title}</h1>
                    <div style={{display: "flex",padding:"4rem"}}>
                        <div style={{width:'30%'}}>
                            <img src={news.path} style={{width: "100%"}} alt=""/>
                        </div>
                        <p style={{width: "60%"}}>{news.text}</p>
                    </div>
                </div>
            </div>
        )
    }
    return <></>

}