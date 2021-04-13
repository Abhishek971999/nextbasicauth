import { getSession } from "next-auth/client";

import UserProfile from "../components/profile/user-profile";

function ProfilePage() {
  return <UserProfile />;
}

export default ProfilePage;
