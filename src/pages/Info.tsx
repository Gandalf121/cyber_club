import {Tariffs} from "../components/tariffs/Tariffs.tsx";
import {InfoPC} from "../components/infoPC/InfoPC.tsx";


export function Info() {
    return (
        <main className="news">
            <div className="news__container">
                <Tariffs/>
                <InfoPC/>
            </div>
        </main>
    );
}
