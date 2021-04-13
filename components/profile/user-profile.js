import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";

function UserProfile() {
  async function changePasswordHandler(passwordData) {
    console.log("change");
  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={changePasswordHandler} />
    </section>
  );
}

export default UserProfile;
