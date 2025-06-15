import axios from "axios";
import { BASEURL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import type { UserState } from "./../utils/userSlice";
import UserCard from "./userCard";

const Feed: React.FC = () => {
  const feed: UserState[] = useSelector(
    (state: { feed: UserState[] }) => state.feed
  );
  const dispatch = useDispatch();
  const getFeed = async () => {
    if (feed !== null) return;
    try {
      const response = await axios.get(BASEURL + "/feed", {
        withCredentials: true,
      });

      dispatch(addFeed(response.data.data));
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    feed && (
      <div className="flex justify-center my-10">
        <UserCard users={feed} />
      </div>
    )
  );
};

export default Feed;
