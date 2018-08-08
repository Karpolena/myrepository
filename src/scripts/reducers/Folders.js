import {FOLDERS} from "./../constants/Folders";

let initState = {
    folders: [],
    isOpenTemplate: false
}

const openTemplate = (state) => {
    return {...state, isOpenTemplate: true};
};

const saveFolder = (state, payload) => {
    state.folders.push(payload);
    return {...state, isOpenTemplate: false};

};

const FoldersReducer = (state = initState, action) => {
    switch(action.type) {
        case FOLDERS.OPEN_TEMPALTE:
            return openTemplate(state);
        case FOLDERS.SAVE_FOLDER:
            return saveFolder(state, action.payload);
        default: return state;
    }
}

export default FoldersReducer;