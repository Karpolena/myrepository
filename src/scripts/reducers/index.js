import {combineReducers } from "redux";
import FoldersReducer from "./Folders";

// combineReducers
// объеденяет все редьюсеры в один общий объект.
// при коннекте сторов в компоненте в метод mapStateToProps приходят все эти редьюсеры
// они отображаются с таким же названием котторое задано тут.

const reducers = combineReducers({
    foldersStore: FoldersReducer
});

export default reducers;