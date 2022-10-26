import PropTypes from "prop-types";
export const Profile = ({ fullname, bio, profession, handleName,children }) => {
  return (
    <div>
      <h1 style={{color: "red",fontSize:"26px",margin:"30px" }}>Name :{fullname}</h1>
      <h1 style={{color: "Blue",fontSize:"22px",margin:"30px" }}>{bio}</h1>
      <h1 style={{color: "Green",fontSize:"20px",margin:"30px" }}>Profession :{profession}</h1>
      {
        children

      }
      <br/>
      <button style={{margin: "50px"}} onClick={() => handleName(fullname)}>Alert</button>
    </div>
  );
};
Profile.defaultProps = {
  fullname: "Ramy Hedhli",
  bio: "Lorem ipsum dolor sit amet",
  profession: "student",
};

Profile.propTypes = {
  fullname: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};
