import {NewsCardProps} from "../../types/NewsCardProps.ts"
import {Link} from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import _ from "lodash";
import {setNews} from "../../redux/slices/newsSlice.ts";


export function NewsCards({id,title,description,date,path}:NewsCardProps) {
    const allNews = useAppSelector(selector => selector.news.allNews)
    const dispatch = useAppDispatch();
    const role = useAppSelector(state => state.user.data.role);
    function deleteOreder (id:number){
        const cloneData = _.cloneDeep(allNews);
        const filterNews = cloneData.filter((el)=>el.id!==id)

        dispatch(setNews(filterNews))
    }
    return (
        <div  className="news__item">
            <div className="news__image">
                <span>{date}</span>
                <img src={path}/>
            </div>
            <div className="news__info">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div style={{display:"flex",textAlign:"center",justifyContent:"center"}}>
                <Link to={`/news/${id}`}>
                    Подробнее
                </Link>
                {role==="ADMIN"?<DeleteForeverIcon onClick={()=>deleteOreder(id)}  sx={{fill:"red"}}/>:""}
            </div>
        </div>
    );
}
