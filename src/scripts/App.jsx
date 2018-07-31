
import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <main className="main">

                <header className="header">
                    <img src="" className="logo" />
                    <form className="search">
                        <button className="btn-search" type="submit"></button>
                        <input type="text"
                                placeholder="Поиск на Диске"/>
                    </form>
                    <nav className="nav-tools">
                        <ul>
                            <li>Справка</li>
                            <li>Настройки</li>
                            <li>Уведомления</li>
                            <li>Аккаунт</li>
                        </ul>
                    </nav>
                </header>

                <aside className="aside">
                    <button>Создать</button>
                    <ul>
                        <li>Мой диск</li>
                        <li>Компьютеры</li>
                        <li>Доступные мне</li>
                        <li>Недавние</li>
                        <li>Помеченные</li>
                        <li>Корзина</li>
                        <li>Резервные копии</li>
                        <li>Хранилище</li>
                    </ul>
                </aside>
                <content className="content">
                
                </content>
            </main>  
        );
    }
}


export default App;