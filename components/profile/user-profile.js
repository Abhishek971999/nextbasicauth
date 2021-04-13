import { useEffect, useState } from "react";
import { getSession, useSession } from "next-auth/client";
import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";
function UserProfile() {
  // const [session, loading] = useSession();
  const [loading, setLoading] = useState(true);
  const [loadedSession, setLoadedSession] = useState(true);
  async function changePasswordHandler(passwordData) {
    console.log("change");
  }
  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        window.location.href = "/auth";
      } else {
        setLoadedSession(session);
        setLoading(false);
      }
    });
  }, []);
  if (loading) {
    return <p className={classes.profile}>Loading...</p>;
  }
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={changePasswordHandler} />
    </section>
  );
}

export default UserProfile;
