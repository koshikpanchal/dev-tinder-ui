import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import { selectUser } from "../utils/userSlice";

const Profile: React.FC = () => {
  const user = useSelector(selectUser);
  return (
    user && (
      <div>
        <EditProfile user={user} />
      </div>
    )
  );
};

export default Profile;
