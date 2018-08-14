// import React, {Component} from 'react';
// //
// // import Data from "./Data";
// //
// // class DataList extends Component {
// //     render() {
// //         const deleteData = this.props.deleteData;
// //         var data = this.props.data.map(data =>
// //             <Kayttaja deleteData={deleteData} key={data.id} data={data}/>
// //         );
// //         return (
// //             <table id="datalist">
// //                 <thead>
// //                 <tr>
// //                     <th>Id</th>
// //                     <th>Title</th>
// //                     <th>Description</th>
// //                     <th>Date</th>
// //                     <th>Tags</th>
// //                     <th>Score</th>
// //                     <th>Code</th>
// //                     <th>Author</th>
// //                     <th><em>DELETE</em></th>
// //                 </tr>
// //                 </thead>
// //                 <tbody>
// //                 {datalist}
// //                 </tbody>
// //             </table>
// //         )
// //     }
// // }
// //
// // export default DataList;

import React, {Component} from 'react';

import Data from "./Data";

class DataList extends Component {
    render() {
        // const deleteData = this.props.deleteData;
        var datalist = this.props.data.map(data =>
            <Data key={data._id} data={data}/>
        );
        return (
            <table id="data">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Tags</th>
                    <th>Score</th>
                    <th>Code</th>
                    <th>Author</th>
                    <th><em>DELETE</em></th>
                </tr>
                </thead>
                <tbody>
                {datalist}
                </tbody>
            </table>
        )
    }
}

export default DataList;