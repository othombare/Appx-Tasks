function ProfileCard({ name, role, experience, skill }) {

  const style = {
    border: skill === "React" ? "3px solid blue" : "1px solid gray",
    padding: "15px",
    margin: "10px",
    borderRadius: "10px"
  };

  return (
    <div style={style}>
      <h3>{name}</h3>
      <p>Role: {role}</p>
      <p>Experience: {experience}</p>
      <p>Skill: {skill}</p>

      {experience > 3 && <p>⭐ Senior Developer</p>}

    </div>
  );
}

export default ProfileCard;