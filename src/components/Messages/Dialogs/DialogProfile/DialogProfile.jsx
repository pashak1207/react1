import classes from "./DialogProfile.module.css";
import { NavLink } from "react-router-dom";

const DialogProfile = (props) => {
  return (
    <div className={classes.dialogProfile}>
      <NavLink className={(state) => (state.isActive) ? classes.active : ""} to={"/message/" + props.id}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
          alt="avatar"
        />
        <div className={classes.text}>
          <h3>{props.name}</h3>
          <p>{props.last}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default DialogProfile;
