import React, {Component} from "react";
import Header from "./containers/Header";
import MainMenu from "./containers/Menu";
import Content from "./containers/Content";

class App extends Component {
    render() {
        return (
            <main className="main">
                <Header />
                <div className="main-container">
                    <MainMenu />
                    <Content />
                </div>
            </main>  
        );
    }
}


export default App;