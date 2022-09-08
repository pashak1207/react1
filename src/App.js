import logo from "./logo.svg";
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
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/profile"
              element={<Profile postsData={props.postsData} />}
            />
            <Route
              path="/message/*"
              element={
                <Messages
                  dialogProfileData={props.dialogProfileData}
                  messagesData={props.messagesData}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
