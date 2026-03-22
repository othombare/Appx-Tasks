import ProfileCard from "./ProfileCard";
import profiles from "../data";

function ProfileList() {
  return (
    <div>
      {profiles.map((p, index) => (
        <ProfileCard
          key={index}
          name={p.name}
          role={p.role}
          experience={p.experience}
          skill={p.skill}
        />
      ))}
    </div>
  );
}

export default ProfileList;