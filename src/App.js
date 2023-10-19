import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ChatDetailPage from "./pages/chats/[id]";
import NotFound from "./pages/404";
import Chat from "./pages/chats";
import ChatUserProfile from "./components/ChatUserProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/chats/:chatId" element={<ChatDetailPage />} />

          <Route exact path="/chats" element={<Chat />} />
          <Route
            exact
            path="/chats/:chatId/profile"
            element={<ChatUserProfile />}
          />

          <Route path="/" element={<Navigate to="/chats" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
