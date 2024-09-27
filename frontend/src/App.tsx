import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyInput from "./components/UI/MyInput/MyInput";
import MyButton from "./components/UI/MyButton/MyButton";

const App = () => {

    const [authModal, setAuthModal] = useState(false);
    const [regOrAuth, setRegOrAuth] = useState(false);

    const setAuthOrRegState = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setRegOrAuth(!regOrAuth);
    }

    return(
    <BrowserRouter>
        <div className='wrapper'>
            <Header setAuthModal={setAuthModal}/>
            <AppRouter />
            <MyModal modalActive={authModal} setModalActive={setAuthModal}>
            <div className="form">
                <div className={regOrAuth ? "form__login notdisplayed" : "form__login"}>
                    <h2 className="form__title">Авторизация</h2>
                    <label htmlFor="name">Никнейм</label>
                    <MyInput placeholder="Введите логин" id='name'/>
                    <label htmlFor="pass">Пароль</label>
                    <MyInput placeholder="Введите пароль" id="pass" style={{marginBottom: '30px'}}/>
                    <MyButton>Войти</MyButton>
                    <div className="form__remember">
                        <label htmlFor='remember'>Запомнить вход?</label><MyInput type="checkbox" placeholder='' id="remember"/>
                    </div>
                    <div className="form__forgot">
                        <button>Забыли пароль</button>
                    </div>
                    <div className="form__notyet">
                        <h3>Еще нет аккаунта?</h3>
                        <MyButton onClick={(e: React.MouseEvent<HTMLButtonElement>) => setAuthOrRegState(e)} style={{width: '140px', height: '50px', fontSize: '18px', paddingInline: '8px'}}>Регистрация</MyButton>
                    </div>
                </div>
                <div className={regOrAuth ? "form__register" : "form__register notdisplayed"}>
                    <h2 className="form__title">Регистрация</h2>
                    <label htmlFor="name">Никнейм</label>
                    <MyInput placeholder="Введите логин" id='name'/>
                    <label htmlFor="name">Email</label>
                    <MyInput placeholder="Введите почту" id='email'/>
                    <label htmlFor="pass">Пароль</label>
                    <MyInput placeholder="Введите пароль" id="pass"/>
                    <br />
                    <MyButton style={{marginBottom: '30px'}}>Отправить</MyButton>
                    <div className="form__notyet">
                        <h3>Уже есть аккаунт?</h3>
                        <MyButton onClick={(e: React.MouseEvent<HTMLButtonElement>) => setAuthOrRegState(e)} style={{width: '140px', height: '50px', fontSize: '18px', paddingInline: '8px'}}>Войти</MyButton>
                    </div>
                </div>
            </div>
            </MyModal>
        </div>
    </BrowserRouter>
    )
}

export default App;