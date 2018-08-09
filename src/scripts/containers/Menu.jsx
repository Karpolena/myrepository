import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import * as FoldersActions from "./../actions/Folders";

const MainMenu = ({dispatch}) => {
    
    return (
        <aside className="aside">
            <button onClick={() => {
                // тут мы бросаем собитые для открытия шаблона
                dispatch(FoldersActions.openTemplate());
            }} className="aside-btn">Создать</button>
            <ul className="aside__list">                    
                <li className="aside__item">                            
                    <svg  width="24px" height="24px" viewBox="0 0 24 24" fill="#4285f4" focusable="false">
                        <path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0z" />
                        <path d="M3 20.01c0 1.1.89 1.99 2 1.99h14c1.1 0 2-.9 2-1.99V18H3v2.01zM18 19c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm1-17H5c-1.1 0-2 .9-2 1.99V17h18V3.99C21 2.89 20.11 2 19 2zm-8.62 3h3.24l3.25 5.68h-3.24L10.38 5zm-3.52 6.16l3.11-5.44s1.62 2.85 1.62 2.84L8.49 14l-1.63-2.84zM15.51 14H9.3l1.62-2.84h6.21L15.51 14z" />
                    </svg>
                    <a href="">Мой диск</a>
                </li>
                <li className="aside__item">
                    <svg  width="24px" height="24px" viewBox="0 0 24 24" fill="#4285f4" focusable="false">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z" />
                    </svg>
                    <a href="">Компьютеры</a>
                </li>
                <li className="aside__item">
                    <svg  width="24px" height="24px" viewBox="0 0 24 24" fill="#4285f4" focusable="false">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                    </svg>
                    <a href="">Доступные мне</a>
                </li>
                <li className="aside__item">
                    <svg  width="24px" height="24px" viewBox="0 0 24 24" fill="#4285f4" focusable="false">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                    <a href="">Недавние</a>
                </li>
                <li className="aside__item">
                    <svg  x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" focusable="false" fill="#4285f4">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    <a href="">Помеченные</a>
                </li>
                <li className="aside__item">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="#4285f4" focusable="false" className="">
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    <a href="">Корзина</a>
                </li>
                <li className="aside__item">
                    <svg  width="24px" height="24px" viewBox="0 0 24 24" fill="#4285f4" focusable="false">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                    </svg>
                    <a href="">Резервные копии</a>
                </li>
                <li className="aside__item">
                    <svg className="USrqEe-ml-Pr-c" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#6f6f6f">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z" />
                    </svg>
                    <a href="">Хранилище</a>
                </li>
            </ul>
        </aside>
    )
}

MainMenu.propTypes = {
    dispatch: PropTypes.func
}

const mapStateToProps = () => {
    return {};
}

export default connect(mapStateToProps)(MainMenu);