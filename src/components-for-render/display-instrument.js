import React, { Component } from 'react';
import MusicalInstrument from '../instrument-scale-calculations/musical-instrument';

let baritonUkelele = new MusicalInstrument(18, ["D", "G", "B", "E"]);
// let info = baritonUkelele.generateBoard();


// console.log(info);



class DisplayInstrument extends Component {
    render() {
        return (
            <table>
                <TableLine data={baritonUkelele.instrument} />
            </table>
            
        )
    }
}

let TableLine = (props) => {
    const line = props.data.map((row, index) => {
        return (
            <tr><td>{row.join(" - ")}</td></tr>
        )
    })
    return <tbody>{line}</tbody>
}

export default DisplayInstrument