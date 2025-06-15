import type { UserState } from "../utils/userSlice";

type UserCardProp = {
  users: UserState[];
};

const UserCard: React.FC<UserCardProp> = ({ users }) => {
  return (
    <>
      {users &&
        users.map((user, index) => (
          <div className="card bg-base-300 w-96 shadow-sm" key={index}>
            <figure>
              <img
                src={
                  user.photoUrl
                    ? user.photoUrl
                    : "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                }
                alt="user profile"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {user.firstName + " " + user.lastName}
              </h2>
              {user.age && <p>{`age: ${user.age}`}</p>}
              {user.gender && <p>{`gender: ${user.gender}`}</p>}
              <p>{user.about}</p>
              <div className="card-actions justify-center">
                <button className="btn btn-secondary">Ignore</button>
                <button className="btn btn-primary">Intrested</button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default UserCard;
