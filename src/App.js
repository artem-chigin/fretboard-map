import React, { Component } from 'react';
import DisplayInstrument from './components-for-render/display-instrument';
import UI from './components-for-render/ui';

class App extends Component {
    render () {
        return (
        <div className='App'>
            <UI />
            <DisplayInstrument />
        </div>
        )
    }
}

export default App