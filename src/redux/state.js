import {renderTree} from "./../render";

let state = {
  messagesPage:{
      messagesDataEl : [
          { text: "Hi" },
          { text: "Hello" },
          { text: "How are you?" },
        ],
      dialogProfileDataEl : [
          { id: "1", name: "Maks", last: "Hi" },
          { id: "2", name: "Vlad", last: "Hello" },
        ]
    },
  profilePage:{
      postsDataEl : [
          { text: "Hi!" },
          { text: "How are you?" },
          { text: "Good weather today" },
          { text: "Have a nice day" },
        ]
    },
  navbar:{
    onlineParthnersDataEl : [
      {name:"Sasha"},
      {name:"Vlad"},
      {name:"Dima"}
    ]
  }
}

export let addMessageFunc= (textMess)=>{
  let newMessItem = {
    text: textMess
  }
  state.messagesPage.messagesDataEl.push(newMessItem);
  renderTree(state);
}

export default state;