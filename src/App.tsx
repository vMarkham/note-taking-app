// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoteList from "./components/NoteList";
import NoteEditor from "./components/NoteEditor";
import useAuth from "./hooks/useAuth";
import SignInPage from "./pages/SignInPage";

function App() {
  const user = useAuth();

  return (
    <div className="App min-h-screen bg-gray-100">
      <Router>
        <Routes>
          {/* Render SignInPage component as the default route */}
          <Route path="/" element={<SignInPage />} />

          {/* Protect the /notes and /notes/:noteId routes by checking if the user is authenticated */}
          {user && (
            <>
              <Route path="/notes" element={<NoteList />} />
              <Route path="/notes/:noteId" element={<NoteEditor />} />
            </>
          )}

          {/* More routes will be added here for different components */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
