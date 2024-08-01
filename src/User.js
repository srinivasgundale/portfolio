const User = (props) => {
  //console.log("🚀 ~ User ~ User:", props);
  return <h1>Name: {formatName(props?.name)}</h1>;
};
function formatName(name) {
  return name ? name.toUpperCase() : "Unknown";
}
export default User;
