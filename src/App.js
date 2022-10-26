import "./App.css";
import { Profile } from "./Profile/Profile";

function App() {
  var fullname = "Hedhli Ramy";
  var bio =
    " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.";
  var profession = "Student";
  const handleName = (fullname) => {
    alert(`Hello ${fullname}`);
  };
  return(
  <div>
    <Profile
      name={fullname}
      bio={bio}
      profession={profession}
      handleName={handleName}
    >
      <img style={{width:"500px", margin:"30px"}} src='./Image/img.jpg' alt='Not Found' />
    </Profile>
  </div>)
}
export default App;
