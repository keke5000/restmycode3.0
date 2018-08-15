import React, {Component} from 'react';
import './App.css';
import DataList from "./Components/DataList";
import DataForm from "./Components/DataForm";
import HeaderComponent from "./Components/HeaderComponent";

// import Chat from "./Components/Chat";

class App extends Component {
    state = {data: []};


    handleDataAdded = (p) => {
        console.log(p);
        fetch('/users/data', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(p)
            // body: JSON.stringify({
            //     title: "title", descript: "descr",
            //     lang: "kieli",
            //     code: "code",
            //     author: "author",
            //     tags: "tags"
        })
            .then(res => {
                // return res.json();
                alert("Code added!");
                this.componentDidMount();
            })
    };
    
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
                <DataForm tiedot={this.state.data} addData={this.handleDataAdded}/>
            </div>
        );
    }
}

export default App;