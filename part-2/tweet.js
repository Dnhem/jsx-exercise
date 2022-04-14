const Tweet = props => {
  return (
    <div className="tweet">
      <span>
        <b>{props.name}</b>
      </span>
      <span className="username">@{props.username}</span>
      <span className="date">{props.date}</span>
      <p>{props.message}</p>
    </div>
  );
};
