import classes from "./Post.module.css";

const Post = (props) => {
    return (
      <div className={classes.post_item}>
        <img src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1" alt="" />
        <h2>{props.text}</h2>
      </div>
    );
}

export default Post;