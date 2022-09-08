import classes from "./MyPosts.module.css";
import Post from "./PostsItems/Post";

const MyPosts = (props) => {
    return (
        <div className={classes.posts}>
            {props.postsData}
        </div>
    );
}

export default MyPosts;