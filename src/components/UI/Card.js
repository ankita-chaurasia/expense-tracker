import "./Card.css"

const Card = (props) => {
  const classes = "card " + props.class;
  return <div className={classes}>{props.children}</div>;
}

export default Card;