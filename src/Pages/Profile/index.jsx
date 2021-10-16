import { useContext, useEffect } from "react";
import { UserIdContext } from "../../Providers/User_id";

const Profile = () => {
  const { userId, setUserId } = useContext(UserIdContext);
  useEffect(() => {}, [userId]);

  return (
    <>
      <h1>Profile</h1>
    </>
  );
};

export default Profile;
