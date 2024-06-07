function SelectSubApp({ onSubAppChange }) {
  return (
    <select
      className="sub-app"
      onChange={(e) => onSubAppChange(e.target.value)}
    >
      <option value={"fretboard-map"}>Fretboard map</option>
      <option value={"circle-of-fifths"}>Circle of Fifths</option>
    </select>
  );
}

export default SelectSubApp;
