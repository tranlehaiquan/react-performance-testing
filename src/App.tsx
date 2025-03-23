import ListAlert from "./components/ListAlert";

function App() {
  return (
    <div className="grid grid-cols-2 gap-4 min-h-screen">
      <div>
        Memo false
        <ListAlert />
      </div>
      <div>
        Memo true
        <ListAlert memo />
      </div>
    </div>
  );
}

export default App;
