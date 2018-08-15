import React, {Component} from 'react';

class Data extends Component {
    handleDeleteClick = (e) => {
        alert("POISTIT TIETOKENTÄN PERKELE!L!!");
        e.preventDefault();
        this.props.deleteData(this.props.data._id);
    };

    handleUpdateClick = (e) => {
        e.preventDefault();
        this.props.updateData(this.props.data._id);
    };

    render() {
        return (
            <tr>
                <td>{this.props.data._id}</td>
                <td>{this.props.data.title}</td>
                <td>{this.props.data.descript}</td>
                <td>{this.props.data.lang}</td>
                <td>{this.props.data.date}</td>
                <td>{this.props.data.tags}</td>
                <td>{this.props.data.score}</td>
                <td className="codeid">{this.props.data.code}</td>
                <td>{this.props.data.author}</td>
                <td><a href="" onClick={this.handleUpdateClick}>Update</a></td>
                <td><a href="" onClick={this.handleDeleteClick}>Delete</a></td>
            </tr>
        )
    }
}

export default Data;