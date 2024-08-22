import {useEffect, useState} from "react";
import {NewsCardProps} from "../types/NewsCardProps.ts"
import {NewsCards} from "../components/newsCards/NewsCards.tsx";
import BasicModal from "../components/modalWindow/ModalWindow.tsx";
import {NewNews} from "../components/newsItem/NewNews.tsx";
import {useAppSelector} from "../redux/hooks.ts";



export function News() {
    const [newsData, setNewsData] = useState<NewsCardProps[]>([])
    const [stateModal, setStateModal] = useState(false);
    const allNews = useAppSelector(state => state.news.allNews);
    useEffect(() => {
        setNewsData(allNews)
    }, [allNews])

    return (
        <main className="news">
            <div className="news__container">
                <h1>Новости</h1>
                <BasicModal content={<NewNews/>} state={stateModal} onUpdate={setStateModal} isButton={true}/>
                <div className="news__items">
                    {newsData.map((item, index) =>
                        <NewsCards
                            key={index}
                            id={item.id}
                            title={item.title}
                            text={""}
                            date={item.date}
                            description={item.description}
                            path={item.path}
                        />
                    )}
                </div>
            </div>
        </main>
    );
}
