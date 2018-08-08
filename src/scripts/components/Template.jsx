import React, {Component} from "react";
import PropTypes from "prop-types";

class FolderTemplate extends Component {

    state = {
        title: ""
    }

    static propTypes = {
        onSave: PropTypes.func
    }

    onChange = (event) => {
        this.setState({title: event.target.value});
    }

    onSave = () => {
        this.props.onSave(this.state.title);
    }

    render() {
        return (
            <div className="folder">
                <div className="folder__header">
                    <input value={this.state.title} type="text" onChange={this.onChange}/>
                </div>
                <div className="folder__controlls">
                    <button onClick={this.onSave}>Сохранить</button>
                </div>
            </div>
        )
    }
}

export default FolderTemplate;