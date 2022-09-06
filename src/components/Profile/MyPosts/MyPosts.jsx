import classes from "./MyPosts.module.css";
import Post from "./PostsItems/Post";

const MyPosts = () => {
    return (
        <div className={classes.posts}>
            <Post text="Hi!"/>
            <Post text="How are you?"/>
            <Post text="Good weather today"/>
            <Post text="Have a nice day"/>
        </div>
    );
}

export default MyPosts;