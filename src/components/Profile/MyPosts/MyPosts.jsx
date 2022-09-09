import classes from "./MyPosts.module.css";
import Post from "./PostsItems/Post";

const MyPosts = (props) => {
    let postsData = props.postsData.map(el => <Post text={el.text}/>);
    return (
        <div className={classes.posts}>
            {postsData}
        </div>
    );
}

export default MyPosts;