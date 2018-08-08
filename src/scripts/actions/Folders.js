import {FOLDERS} from "./../constants/Folders";

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