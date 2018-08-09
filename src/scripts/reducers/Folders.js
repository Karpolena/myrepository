import {FOLDERS} from "./../constants/Folders";

// это объект для инициализации состояния редьюсера. (хранилище / store)
let initState = {
    folders: [],
    isOpenTemplate: false
}
// методы для взаимодействия с хранилищем
const openTemplate = (state) => {
    return {...state, isOpenTemplate: true};
};

const saveFolder = (state, payload) => {
    state.folders.push(payload);
    return {...state, isOpenTemplate: false};

};

// редьюсер
// он принимает в параметрах (state и action);
// в стейт, для инициализации, по умолчанию, передается объект.
// котрый мы потом видим в компоненте приконнектив этот редьюсер.  
// action это объект который принимает одно обезательное поле (type) 
// в action можно ложить неограниченное колличество параметров.
// но понаормальному лучше чтобы структура action была такая
// action: {
//      type: SOME_TYPE,
//      patload: {
//        some fields
//      }
//}
// редьюсер должен возвращать новый экземпляр хранилища чтобы небыло мутаций данных.
// несколько способов как создать новый экземпляр стора
// Object.assing({}, state) - это при помощи чистого js.
// {...state} при помощи деструктуризации (нужен бабель для этого)
// у нас подключен бабель поэтому мы можем сделать через деструктуризацию 
const FoldersReducer = (state = initState, action) => {

    // через свитч мы смотрим кокого типа пришло собитие 
    // и вызываем определенный метод
    switch(action.type) {
        case FOLDERS.OPEN_TEMPALTE:
            return openTemplate(state);
        case FOLDERS.SAVE_FOLDER:
            return saveFolder(state, action.payload);
        default: return state;
    }
}

export default FoldersReducer;