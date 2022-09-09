import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./PostsItems/Post";

const MyPosts = (props) => {
    let postsData = props.postsData.map(el => <Post text={el.text}/>);

    let newPostElement = React.createRef(); 

    let addPostFunc = ()=>{
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className={classes.posts}>
            <div className={classes.addPost}>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPostFunc}>Add post</button>
            </div>
            {postsData}
        </div>
    );
}

export default MyPosts;