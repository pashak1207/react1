import classes from "./OnlineParthnersItem.module.css";

const OnlineParthnersItem = (props) => {
  return (
    <div className={classes.item}>
          <img
            src="https://www.pngitem.com/pimgs/m/111-1114839_circle-people-icon-flat-png-avatar-icon-transparent.png"
            alt=""
          />
          <h3>{props.name}</h3>
    </div>
  );
};

export default OnlineParthnersItem;
