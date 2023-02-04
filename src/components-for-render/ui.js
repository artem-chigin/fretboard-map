import React, { Component } from 'react';
import SelectInstrument from './select-instrument';
import SelectNote from './select-note';
import SelectSequence from './select-sequence';

class UI extends Component {
    render() {
        return (
        <div className='ui-container'>
            <h1>UI</h1>
            <SelectInstrument />
            <SelectNote />
            <SelectSequence />
            </div>
        )
    }
}


export default UI;