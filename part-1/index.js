const App = () => (
  <div>
    <FirstComponent />
    <NamedComponent name="Bilbo" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
