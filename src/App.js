import React, {Component} from 'react';
import './App.css';
import DataList from "./Components/DataList";
import DataForm from "./Components/DataForm";

class App extends Component {
    state = {data: []};

    handleDataAdded = (p) => {
        data.push(p);
        this.setState({});
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

    render() {
        return (
            <div id="content">
                <h1>RestMyCode_3.0</h1>
                <DataList data={this.state.data}/>
                <DataForm tiedot={this.state.data} addData={this.handleDataAdded}/>

            </div>
        );
    }
}

export default App;