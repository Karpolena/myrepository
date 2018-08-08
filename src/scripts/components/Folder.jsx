import React from "react";
import PropTypes from "prop-types";

const Folder = ({folder}) => {
    return (
        <div className="folder">
        <div className="folder__header">
            {folder.title}
        </div>
        <div className="folder__controlls">
            __ FOLDER __
        </div>
    </div>
    )
}

Folder.propTypes = {
    folder: PropTypes.object
}

export default Folder;