import { useState } from "react";
import { addUser, type UserState } from "../utils/userSlice";
import UserCard from "./userCard";
import { BASEURL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";

type EditProfileProps = {
  user: UserState;
};

const EditProfile: React.FC<EditProfileProps> = (pops) => {
  const { user } = pops;

  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState<string>(user.firstName);
  const [lastName, setLastName] = useState<string>(user.lastName);
  const [about, setAbout] = useState<string>(user.about);
  const [skills, setSkills] = useState<string[]>(user.skills || []);
  const [age, setAge] = useState<string>(user.age || "");
  const [photoUrl, setPhotoUrl] = useState<string>(user.photoUrl || "");
  const [gender, setGender] = useState<string>(user.gender || "");
  const [error, setError] = useState<string>("");

  const updateProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        BASEURL + "/profile/edit",
        { firstName, lastName, about, age, gender, photoUrl, skills },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res?.data?.data));
    } catch (error) {
      setError("Profile update failed ");
    }
  };

  return (
    <div className="flex justify-center my-10 space-x-10">
      <div className="card card-dash bg-base-300 w-96 ">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">First Name</legend>
            <input
              type="text"
              className="input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Last name</legend>
            <input
              type="text"
              className="input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">About</legend>
            <input
              type="text"
              className="input"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </fieldset>
          {/* <fieldset className="fieldset">
            <legend className="fieldset-legend">Skills</legend>
            <input
              type="text"
              className="input"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            /> 
          </fieldset> */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Age</legend>
            <input
              type="text"
              className="input"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo Url</legend>
            <input
              type="text"
              className="input"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Gender</legend>
            <input
              type="text"
              className="input"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </fieldset>
          {error && <p className="text-red-500">{error}</p>}
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={updateProfile}>
              Update Profile
            </button>
          </div>
        </div>
      </div>
      <UserCard
        users={[
          {
            firstName,
            lastName,
            about,
            age,
            gender,
            photoUrl,
            skills,
            emailId: user.emailId,
          },
        ]}
      />
    </div>
  );
};

export default EditProfile;
