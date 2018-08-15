import React, {Component} from 'react';
import DataList from "./DataList";
import Grid from "react-bootstrap/es/Grid";
import Col from "react-bootstrap/es/Col";

class ListingPage extends Component {
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

    updateData = (objectId) => {
        fetch('/users/update/data/' + objectId, {
            method: 'PUT',
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
            <Grid>
                <Col>
                    <div id="content">
                        <DataList data={this.state.data} updateData={this.updateData} deleteData={this.deleteData}/>
                    </div>
                </Col>
            </Grid>
        );
    }
}

export default ListingPage;