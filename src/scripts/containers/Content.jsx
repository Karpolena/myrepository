import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types"; 
import FolderTemplate from "./../components/Template";
import * as FolderActions from "./../actions/Folders";
import Folder from "./../components/Folder";

const Content = ({foldersStore, dispatch}) => {
    // из параметров через деструктуризацию мы достаем стор который мы определили в connect.
    // метод dispatch при подключении любого стора передается автоматом
    // через него мы бросаем события для изменения хранилища
    // когда мы бросаем событие то редьюсер слушает это событие и изменяет данные в хранилище
    // после этого редакс перерендеривает наш компонент и передает ему обневленное хранилище
    // все изменения в хранилище нужно вносить только через события (dispatch(SomeAction()))

    // из хранилища мы достаем воле folders и рисуем блоки
    return (
        <content className="content">
            {
                foldersStore.folders.map(_folder => {
                    return (
                        <Folder key={_folder.id} folder={_folder}/>
                    )
                })
            }
            { 
                // если поле isOpenTemplate = true то мы рисуем шаблон лоя создания папок
                foldersStore.isOpenTemplate ? 
                <FolderTemplate onSave={(title) => {
                    // dispatch позволяет броcить событие с нужным для нас объектом
                    // который мы определили в actions.
                    // тут мы форимуем объект для новой папки
                    // и бросаем собитые с этим объектом
                    // метод SaveFolder соберет нам объект и подставит тив собития
                    dispatch(FolderActions.SaveFolder({
                        title,
                        id: Math.random().toString(36).substr(2, 9)
                    }))
                }}/> : null 
            }
        </content>
    )
}

// таким образом мы валидируем все параметры которые на заходят.
Content.propTypes = {
    foldersStore: PropTypes.object,
    dispatch: PropTypes.func
}

// через коннект мы определяем какой стор мы хотим передать в пропсы компонента.
// в поле stores лежат все доступные сторы которые были описаны в reducers/index => combineReducers
export default connect(stores => {
    return {
        foldersStore: stores.foldersStore
    }
})(Content);