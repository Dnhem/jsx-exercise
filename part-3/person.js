const Person = props => {
  let msg = props.age > 18 ? <h3>please go vote</h3> : <h3>you must be 18</h3>;
  let hobbyList = (props.hobbies || []).map(hobby => <li>{hobby}</li>);
  return (
    <div>
      <p>Learn some information about this person</p>
      <p>Name: {props.name.slice(0, 6)}</p>
      <p>Age: {props.age}</p>
      <ul>
        <b>Hobbies:</b>
        {hobbyList}
      </ul>
      <h3>{msg}</h3>
    </div>
  );
};
