import React, {Component} from 'react';
import './App.css';
import DataList from "./Components/DataList";
import HeaderComponent from "./Components/HeaderComponent";
// import Chat from "./Components/Chat";

class App extends Component {
    state = {data: []};

    componentDidMount() {
        let thisThis = this;
        fetch('/users')
            .then((resp) => {
                return resp.json();
            })
            .then((obj) => {
                thisThis.setState({data: obj});
                console.log("Object", obj);
            })

    };

        deleteData = (objectId) => {
        fetch('/users/deletedata/' + objectId, {
            method: 'DELETE'
        })
            .then(resp => {
                console.log("the list after deletion", resp);
                this.componentDidMount();

            });
    };

    render() {
        return (
            <div id="content">
                <HeaderComponent/>
                <DataList data={this.state.data} deleteData={this.deleteData}/>
            </div>
        );
    }
}

export default App;