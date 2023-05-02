import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import NoteList from "./components/NoteList";
import NoteEditor from "./components/NoteEditor";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/notes" element={<NoteList />} />
          <Route path="/notes/:noteId" element={<NoteEditor />} />

          {/* More routes will be added here for different components */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
