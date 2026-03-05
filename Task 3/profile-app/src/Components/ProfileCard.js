function ProfileCard({ name, role, experience, skill }) {

  const isSenior = experience > 3;
  const isReactDev = skill === "React";

  const cardStyle = {
    border: isReactDev ? "3px solid blue" : "1px solid gray",
    padding: "15px",
    margin: "10px",
    borderRadius: "8px"
  };

  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p>Role: {role}</p>
      <p>Experience: {experience} years</p>
      <p>Skill: {skill}</p>

      {isSenior && (
        <span style={{ color: "green", fontWeight: "bold" }}>
          Senior Developer
        </span>
      )}
    </div>
  );
}

export default ProfileCard;