import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Nav state={props.state.navbar}/>
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/profile"
              element={<Profile state={props.state.profilePage} />}
            />
            <Route
              path="/message/*"
              element={<Messages state={props.state.messagesPage} addMessageFunc={props.addMessageFunc}/>}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
