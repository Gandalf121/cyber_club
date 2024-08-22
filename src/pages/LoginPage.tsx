import {AuthorizationForm} from "../components/authorizationForm/AuthorizationForm.tsx";

export function LoginPage() {
    return (
        <section className="login">
            <div className="login__container">
                <div className="login__wrapper">
                    <div className="login__content">
                        <AuthorizationForm/>
                    </div>
                </div>
            </div>
        </section>
    );
}
