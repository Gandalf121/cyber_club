import {useAppSelector} from "../redux/hooks.ts";
import Reservation from "../components/reservation/Reservation.tsx";


export function PersonalAccount() {
    const {fullName} = useAppSelector(selector=> selector.user.data)
    return (
        <main className="news">
            <div className="news__container">
                <h1 style={{paddingTop:"2rem"}}>Добро пожаловать,{fullName} </h1>
                <Reservation/>
            </div>
        </main>
    );
}