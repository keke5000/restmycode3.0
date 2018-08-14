// import React, {Component} from 'react';
//
// class Data extends Component {
//     handleDeleteClick = (e) => {
//         e.preventDefault();
//         this.props.deleteData(this.props.data.id);
//     };
//
//     render() {
//         return (
//             <tr>
//                 <td>{this.props.kayttaja.id}</td>
//                 <td>{this.props.kayttaja.title}</td>
//                 <td>{this.props.kayttaja.descript}</td>
//                 <td>{this.props.kayttaja.date}</td>
//                 <td>{this.props.kayttaja.tags}</td>
//                 <td>{this.props.kayttaja.score}</td>
//                 <td>{this.props.kayttaja.code}</td>
//                 <td>{this.props.kayttaja.author}</td>
//                 <td><a href="" onClick={this.handleDeleteClick}>Delete</a></td>
//             </tr>
//         )
//     }
// }

import React, {Component} from 'react';

class Data extends Component {
    // handleDeleteClick = (e) => {
    //     e.preventDefault();
    //     this.props.deleteData(this.props.data.id);
    // };

    render() {
        return (
            <tr>
                <td>{this.props.kayttaja.id}</td>
                <td>{this.props.kayttaja.title}</td>
                <td>{this.props.kayttaja.descript}</td>
                <td>{this.props.kayttaja.date}</td>
                <td>{this.props.kayttaja.tags}</td>
                <td>{this.props.kayttaja.score}</td>
                <td>{this.props.kayttaja.code}</td>
                <td>{this.props.kayttaja.author}</td>
                <td><a href="">Delete</a></td>
            </tr>
        )
    }
}

export default Data;