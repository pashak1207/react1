import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts"

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <img src="https://www.bmw-motorsport.com/content/dam/bmw/marketBMWSPORTS/bmw-motorsport_com/assets/fascination/wallpaper/bmw-motorsport-m6-gt3-m4-gt4-m240i-customer-racing-wallpaper.jpg.asset.1581519349390.jpg" alt="" />
            <div className={classes.profile}>
                <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="" />
                <div className={classes.profile__text}>
                    <h2>Pasha Kr</h2>
                    <p>Date of Birdth: Jul, 19 2002</p>
                    <p>City: Vinnytsia</p>
                    <p>Education: VNTU</p>
                    <p>Work: Front-end programmer</p>
                </div>
            </div>
            <MyPosts postsData={props.postsData}/>
        </div>
    );
}

export default Profile;