// import React, {Component} from 'react';
// import './App.css';
// import DataList from "./Components/DataList";
//
// class App extends Component {
//     state = {data: []};
//
//     componentDidMount() {
//         let thisThis = this;
//         fetch('/osoite')
//             .then((resp) => {
//                 return resp.json();
//             })
//             .then((obj) => {
//                 thisThis.setState({data: obj});
//                 console.log("Object", obj);
//             })
//
//     };
//
//     deleteData = (objectId) => {
//         fetch('/osoite/' + objectId, {
//             method: 'DELETE'
//         })
//             .then(resp => {
//                 console.log("the list after deletion", resp);
//                 this.componentDidMount();
//
//             });
//     };
//
//     render() {
//         return (
//             <div>
//                 <h1>RestMyCode_3.0</h1>
//                 <DataList deleteData={this.deleteData} data={this.state.data}/>
//             </div>
//         );
//     }
// }
//
// export default App;

import React, {Component} from 'react';
import './App.css';
import DataList from "./Components/DataList";

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

    render() {
        return (
            <div id="content">
                <h1>RestMyCode_3.0</h1>
                <DataList data={this.state.data}/>
            </div>
        );
    }
}

export default App;