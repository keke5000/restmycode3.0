import React, {Component} from 'react';

class Data extends Component {
    // handleDeleteClick = (e) => {
    //     e.preventDefault();
    //     this.props.deleteData(this.props.data.id);
    // };

    render() {
        return (
            <tr>
                <td>{this.props.data._id}</td>
                <td>{this.props.data.title}</td>
                <td>{this.props.data.descript}</td>
                <td>{this.props.data.date}</td>
                <td>{this.props.data.tags}</td>
                <td>{this.props.data.score}</td>
                <td>{this.props.data.code}</td>
                <td>{this.props.data.author}</td>
                <td><a href="">Delete</a></td>
            </tr>
        )
    }
}

export default Data;