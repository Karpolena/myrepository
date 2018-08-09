import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import reducers from "./../reducers/index";

//создает общее хранилище для всех редьюсеров
// и передается логер в middleware
//middleware это промежуточные методы которые помогают всячески расширять 
// события и функционал.


const store = createStore(reducers, applyMiddleware(logger));
export default store;