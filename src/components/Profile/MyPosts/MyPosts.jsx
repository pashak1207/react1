import classes from "./MyPosts.module.css";
import Post from "./PostsItems/Post";

const MyPosts = () => {
    //Just comment
    return (
        <div className={classes.posts}>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default MyPosts;