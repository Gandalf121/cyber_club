import "./authorizationForm.css"
import {login} from "../../axios/auth.ts";
import {useState} from "react";
import {setUser} from "../../redux/slices/userSlice.ts";
import {useAppDispatch} from "../../redux/hooks.ts";
import {useNavigate} from 'react-router-dom';
import {createUser} from "../../axios/user.ts";
import { enqueueSnackbar } from 'notistack'

export function AuthorizationForm() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nickname, setNickname] = useState("")
    const [newUserState, setNewUserState] = useState(true)

    function actionOnForm (){
        if(!newUserState){
            return createUser(email, password,nickname).then(() => {
                enqueueSnackbar('Регистрация произошла успешно')
            }).catch(() => enqueueSnackbar('Ошибка'))
        }else {
            return  login(email, password).then((res) => {
                dispatch(setUser(res.data))
                navigate('/personalAccount');
            }).catch((err) => console.log(err))
        }
    }


    return (
        <div className="login__form">
            <h2>авторизация</h2>
            <p>(Используйте аккаунт компьютерного клуба cyber gg)</p>
            {!newUserState ?
                <div className="login__field">
                    <input id="login" value={nickname} onChange={(e) => setNickname(e.target.value)}/>
                    <label>Ник</label>
                </div>:
                ""
            }
            <div className="login__field">
                <input id="login" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Email</label>
            </div>
            <div className="login__field">
                <input id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <label>Пароль</label>
            </div>
            <button className="login__button" onClick={()=>actionOnForm()}>{newUserState?"Войти":"Зарегистрироваться"}
            </button>
            <p className="newUser" onClick={() => setNewUserState((newUserState) => !newUserState)}>{newUserState?"регистрация":"Вход"}</p>
        </div>
    );
}



// login