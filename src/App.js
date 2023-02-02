import React, { Component } from 'react';
import DisplayInstrument from './components-for-render/display-instrument';


class App extends React.Component {
    render () {
        return (
        <div className='App'>
            <h1>Hello, React</h1>
            <DisplayInstrument />
        </div>
        )
    }
}

export default App