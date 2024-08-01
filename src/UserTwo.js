const UserTwo = (props) => {
  const { lastName, firstName } = props;
  const userArray = [lastName, firstName];
  console.log("🚀 ~ UserTwo ~ userArray:", userArray);
  const [fn, ln] = userArray;
  console.log("🚀 ~ UserTwo ~ props:", props);
  return (
    <>
      <h1> I'm {props.firstName + " " + props.lastName}</h1>
      <p> object destruct {firstName + " " + lastName}</p>
      <p> array destruct {fn + " " + ln}</p>
    </>
  );
};
export default UserTwo;
