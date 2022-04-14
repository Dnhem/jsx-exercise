const App = () => {
  return (
    <div>
      <Person
        name="Homer"
        age={38}
        hobbies={[ "bowling", "watching tv", "drinking beer" ]}
      />
      <Person
        name="Alabasteramabama"
        age={19}
        hobbies={[ "Playing video games", "Lifting Weights", "Sleeping" ]}
      />
      <Person
        name="Chuck"
        age={16}
        hobbies={[
          "Kickin ass",
          "Kickin more ass",
          "Oh yeah did I mention kicking ass?",
        ]}
      />
      <Person
        name="Norris"
        age={32}
        hobbies={[ "Playing with nunchucks", "drinking whiskey" ]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
