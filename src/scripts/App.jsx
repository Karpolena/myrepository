
import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <main className="main">

                <header className="header">
                    <div className="header-left">
                        <a className="logo" href="">
                            <img className="logo-img" src="https://www.gstatic.com/images/branding/product/2x/drive_48dp.png"/>
                            <span className="logo-text">Диск</span>
                        </a> 
                        <form className="search">
                            <button className="search-btn zoom" type="submit">
                            <svg focusable="false" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                            </button>
                            <input className="search-input" 
                                    type="text"
                                    placeholder="Поиск на Диске"/>
                            <button className="search-btn triangle" type="submit">
                            <svg focusable="false" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                            </button>
                        </form>
                    </div>
                    <nav>
                        <ul className="nav-tools">
                            <li title="Справка">
                                <button className="nav-tools__btn">
                                    <svg  width="24px" height="24px" viewBox="0 0 24 24" focusable="false" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></svg>
                                </button>                            
                            </li>
                            <li title="Настройки">
                                <button className="nav-tools__btn">
                                    <svg  width="24px" height="24px" viewBox="0 0 24 24" fill="#000000" focusable="false"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></svg>
                                </button>                            
                            </li>
                        </ul>
                    </nav>
                </header>

                <aside className="aside">
                    <button className="aside-btn">Создать</button>
                    <ul className="aside__list">                    
                        <li className="aside__item">                            
                            <svg  width="24px" height="24px" viewBox="0 0 24 24" fill="#4285f4" focusable="false"><path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0z"></path><path d="M3 20.01c0 1.1.89 1.99 2 1.99h14c1.1 0 2-.9 2-1.99V18H3v2.01zM18 19c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm1-17H5c-1.1 0-2 .9-2 1.99V17h18V3.99C21 2.89 20.11 2 19 2zm-8.62 3h3.24l3.25 5.68h-3.24L10.38 5zm-3.52 6.16l3.11-5.44s1.62 2.85 1.62 2.84L8.49 14l-1.63-2.84zM15.51 14H9.3l1.62-2.84h6.21L15.51 14z"></path></svg>
                            <a href="">Мой диск</a>
                        </li>
                        <li className="aside__item">
                            <svg  width="24px" height="24px" viewBox="0 0 24 24" fill="#4285f4" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path></svg>
                            <a href="">Компьютеры</a>
                        </li>
                        <li className="aside__item">
                            <svg  width="24px" height="24px" viewBox="0 0 24 24" fill="#4285f4" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></svg>
                            <a href="">Доступные мне</a>
                        </li>
                        <li className="aside__item">
                            <svg  width="24px" height="24px" viewBox="0 0 24 24" fill="#4285f4" focusable="false"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><path d="M0 0h24v24H0z" fill="none"></path><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>
                            <a href="">Недавние</a>
                        </li>
                        <li className="aside__item">
                            <svg  x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" focusable="false" fill="#4285f4"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                            <a href="">Помеченные</a>
                        </li>
                        <li className="aside__item">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="#4285f4" focusable="false" class=""><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                            <a href="">Корзина</a>
                        </li>
                        <li className="aside__item">
                            <svg  width="24px" height="24px" viewBox="0 0 24 24" fill="#4285f4" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></svg>
                            <a href="">Резервные копии</a>
                        </li>
                        <li className="aside__item">
                            <svg class="USrqEe-ml-Pr-c" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#6f6f6f"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path></svg>
                            <a href="">Хранилище</a>
                        </li>
                    </ul>
                </aside>
                <content className="content">

                </content>
            </main>  
        );
    }
}


export default App;