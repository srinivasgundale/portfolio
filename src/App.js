import User from "./User";
function App() {
  return (
    <div className="App">
      <div className="testClass">Welcome {formatName(user)}</div>
      {console.log("helooo")}
      {/** the below component render line wont be visible in react devtools */}
      {User({ name: formatName(user) })}
      {/** the below component render line will be visible in react devtools */}
      <User name={formatName(user)} />
      <User name={formatName(user)} />
      <User></User>
    </div>
  );
}
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Harper",
  lastName: "Perez",
};
export default App;
