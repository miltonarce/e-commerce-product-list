function Spinner({ size = 8 }) {
  return (<div className={`spinner-border animate-spin h-${size} w-${size}  border-b-2 border-b-indigo-500 rounded-full`} />);
}

export default Spinner;
