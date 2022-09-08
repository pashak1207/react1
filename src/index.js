import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DialogMessagesItem from './components/Messages/DialogMessages/DialogsMaessagesItem/DialogMessagesItem';
import DialogProfile from './components/Messages/Dialogs/DialogProfile/DialogProfile';
import Post from './components/Profile/MyPosts/PostsItems/Post';
import state from './redux/state';

let messagesDataEl = [
  { text: "Hi" },
  { text: "Hello" },
  { text: "How are you?" },
];
let dialogProfileDataEl = [
  { id: "1", name: "Maks", last: "Hi" },
  { id: "2", name: "Vlad", last: "Hello" },
];
let postsDataEl = [
  { text: "Hi!" },
  { text: "How are you?" },
  { text: "Good weather today" },
  { text: "Have a nice day" },
];


let messagesData = messagesDataEl.map(el => <DialogMessagesItem text={el.text}/>);
let dialogProfileData = dialogProfileDataEl.map(el => <DialogProfile id={el.id} name={el.name} last={el.last}/>);
let postsData = postsDataEl.map(el => <Post text={el.text}/>);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App messagesData={messagesData} dialogProfileData={dialogProfileData} postsData={postsData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
