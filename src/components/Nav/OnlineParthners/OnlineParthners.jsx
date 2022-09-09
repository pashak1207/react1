import classes from "./OnlineParthners.module.css";
import OnlineParthnersItem from "./OnlineParthnersItem/OnlineParthnersItem";

const OnlineParthners = (props) => {
    let onlineParthnersData = props.onlineParthnersDataEl.map(el => <OnlineParthnersItem name={el.name}/>);
  return (
    <div className={classes.onlineParthners}>
      <h2>Parthners Online</h2>
      <div className={classes.items}>
        {onlineParthnersData}
      </div>
    </div>
  );
};

export default OnlineParthners;
