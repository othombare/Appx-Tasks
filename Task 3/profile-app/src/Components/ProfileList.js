import ProfileCard from "./ProfileCard";
import profiles from "../data";

function ProfileList() {
  return (
    <div>
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          name={profile.name}
          role={profile.role}
          experience={profile.experience}
          skill={profile.skill}
        />
      ))}
    </div>
  );
}

export default ProfileList;