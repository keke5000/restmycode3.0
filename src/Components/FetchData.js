import React, {Component} from 'react';

class FetchData extends Component {

    render() {
        const data = this.props.lista;
        console.log("Tämä tulee datassa.", data);
        // const saalista = data.map((saa, index)=>{
        //     return <tr key={index}>
        //         <td>{saa.name}</td>
        //         <td>{saa.population}</td>
        //     </tr>
        // });
        return (
            <div>
                <li>{}</li>

            </div>
            // <div>{saalista}</div>
        );
    }
}

export default FetchData;