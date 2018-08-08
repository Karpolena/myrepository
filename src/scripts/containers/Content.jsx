import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types"; 
import FolderTemplate from "./../components/Template";
import * as FolderActions from "./../actions/Folders";
import Folder from "./../components/Folder";

const Content = ({foldersStore, dispatch}) => {
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
                foldersStore.isOpenTemplate ? 
                <FolderTemplate onSave={(title) => {
                    dispatch(FolderActions.SaveFolder({
                        title,
                        id: Math.random().toString(36).substr(2, 9)
                    }))
                }}/> : null 
            }
        </content>
    )
}

Content.propTypes = {
    foldersStore: PropTypes.object,
    dispatch: PropTypes.func
}

export default connect(stores => {
    return {
        foldersStore: stores.foldersStore
    }
})(Content);