import "./header.css"
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks.ts";
import PositionedMenu from "../menu/Menu.tsx";


export function Header() {
    const userName = useAppSelector(selector=>selector.user.data.fullName);

    return (
        <>
            <header className="header">
                <div className="header__container">
                    <div className="header__wrapper">
                        <div className="header__logo">
                            <NavLink className="header__logo" to='/'>
                                <p> Cyber GG </p>
                            </NavLink>
                        </div>
                        <div className="header__nav" style={{display: "flex", justifyContent: "space-between", width:"50%"}}>
                            <NavLink className="navlink" to='/'>
                                <p>Главная</p>
                            </NavLink>
                            <NavLink className="navlink" to='/info'>
                                <p>Информация</p>
                            </NavLink>
                            <NavLink className="navlink" to='/news'>
                                <p>Новости</p>
                            </NavLink>
                            <NavLink className="navlink" to='/personalAccount'>
                                <p>{userName?"Кабинет":""}</p>
                            </NavLink>
                        </div>
                        {userName!==""?<PositionedMenu name={userName}/>:<NavLink className="navlink" to='/login'>
                            <p>Вход</p>
                        </NavLink>}
                    </div>
                </div>
            </header>
        </>

    );
}
