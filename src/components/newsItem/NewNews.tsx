import "./news.css"
import {useState} from "react";
import {NewsCardProps} from "../../types/NewsCardProps.ts";
import {useAppSelector} from "../../redux/hooks.ts";
import {useDispatch} from "react-redux";
import {setNews} from "../../redux/slices/newsSlice.ts";
import {enqueueSnackbar} from "notistack";
// export type NewsCardProps={

// }
const getMaxId = (allNews:NewsCardProps[]): number => {
    return Math.max(...allNews.map((news) => news.id));
};

export function NewNews() {
    const dispatch = useDispatch();
    const allNews = useAppSelector(selector=>selector.news.allNews)
    const [createNews, setCreateNews] = useState<NewsCardProps>(
        {
            id:getMaxId(allNews)+1,
            title:"",
            description:"",
            text:"",
            date:"",
            path:""
        }
    )
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setCreateNews((prevNews) => ({ ...prevNews, [name]: value }));
    };
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <h2>Создание новости</h2>
            <label>Заглавие</label>
            <input value={createNews.title} name="title" className="newsInput" onChange={handleInputChange} />
            <label>Краткое описание</label>
            <input value={createNews.description} name="description" className="newsInput" onChange={handleInputChange}/>
            <label>Дата создания</label>
            <input value={createNews.date} name="date" className="newsInput" type="date" onChange={handleInputChange}/>
            <label>Ссылка на картинку</label>
            <input value={createNews.path} name="path" className="newsInput" onChange={handleInputChange}/>
            <label>Текст</label>
            <textarea value={createNews.text} name="text" style={{width:"80%",height:"7rem"}} onChange={handleInputChange}/>
            <button onClick={()=>{
                dispatch(setNews([...allNews,createNews]))
                enqueueSnackbar('Новость создана')
            }} style={{padding: "1rem",marginTop:"1rem"}}>Создать</button>
        </div>
    );
}
