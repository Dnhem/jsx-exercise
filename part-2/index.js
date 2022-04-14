const App = () => {
  return (
    <div>
      <Tweet
        username="DaHobbit"
        name="Frodo"
        date={new Date().toDateString()}
        message="One ring to rule them all 💍"
      />
      <Tweet
        username="Spongebob"
        name="Spongebob Squarepants"
        date={new Date().toDateString()}
        message="Patrick is a snail. Patrick is my best friend 🐌"
      />
      <Tweet
        username="Fresh Prince"
        name="Will Smith"
        date={new Date().toDateString()}
        message="I shouldn't have slapped Chris Rock. 👋🏾 🙅🏾‍♂️"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
