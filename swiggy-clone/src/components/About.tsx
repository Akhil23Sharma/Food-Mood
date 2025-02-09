import User from "./User";
import UserClass from "./UserClass";
import MyApp from "./ProgressBar";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h2>This is our cool site</h2>
      <h3> Chnge check</h3>
      {/* <User name = {"Akhil"}/> */}
      <UserClass name={" "} location={""} />
    </div>
  );
};

export default About;
