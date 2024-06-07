import { useState } from "react";
import SelectSubApp from "./components-for-render/select-sub-app";
import FretboardMap from "./components-for-render/fretboard-map/fretboard-map";
import CircleOfFifths from "./components-for-render/circle-of-fifths/circle-of-fifths";

function App() {
  const [currentSubApp, setCurrentSubApp] = useState("fretboard-map");

  if (process.env.NODE_ENV !== "production") {
    return (
      <div className="App">
        {currentSubApp === "fretboard-map" ? (
          <FretboardMap />
        ) : (
          <CircleOfFifths />
        )}
        <SelectSubApp onSubAppChange={(value) => setCurrentSubApp(value)} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <FretboardMap />
      </div>
    );
  }
}

export default App;
