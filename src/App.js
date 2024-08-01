import User from "./User";
import ProductListing from "./ProductListing";
import UserTwo from "./UserTwo";
function App() {
  return (
    <>
      <div className="testClass">Welcome {formatName(user)}</div>
      {console.log("helooo")}
      {/** the below component render line wont be visible in react devtools */}
      {User({ name: formatName(user) })}
      {/** the below component render line will be visible in react devtools */}
      <User name={formatName(user)} />
      <User name={formatName(user)} />
      <User></User>

      <UserTwo {...user} />
    </>
  );
}
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Raghav",
  lastName: "Gundali",
};
export default App;
