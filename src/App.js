import { useState } from 'react';
import SelectSubApp from './components-for-render/select-sub-app';
import FretboardMap from './components-for-render/fretboard-map/fretboard-map';
import CircleOfFifths from './components-for-render/circle-of-fifths/circle-of-fifths';


function App() {
    const [currentSubApp, setCurrentSubApp] = useState("fretboard-map");

        return (
        <div className='App'>
            <SelectSubApp onSubAppChange={(value) => setCurrentSubApp(value)}/>
            {currentSubApp === "fretboard-map" ? <FretboardMap /> : <CircleOfFifths />}
        </div>
        )
}

export default App