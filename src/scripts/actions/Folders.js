import {FOLDERS} from "./../constants/Folders";

// action
// все что мы возвращаем в action-методе
// будет помещено в action редьюсера
// const reducer = (state = initState, action) =>
//                                     ^^^^^^
// в action редьюсера попадет этот объект который мы отправляем
// {
//    type: FOLDERS.OPEN_TEMPALTE
// }
export const openTemplate = () => {
    return {
        type: FOLDERS.OPEN_TEMPALTE
    }
}

export const SaveFolder = (payload) => {
    return {
        type: FOLDERS.SAVE_FOLDER,
        payload
    }
}