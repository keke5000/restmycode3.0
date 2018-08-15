import React, {Component} from 'react';
import DataForm from "./DataForm";

class AddPage extends Component {
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
        })
            .then(res => {
                alert("Code added!");
                this.componentDidMount();
            })
    };

    render() {
        return (
            <div id="content">
                <DataForm tiedot={this.state.data} addData={this.handleDataAdded}/>
            </div>
        );
    }
}

export default AddPage;