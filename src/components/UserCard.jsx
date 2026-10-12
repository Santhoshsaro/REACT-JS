import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>

      <p>ID: {user.id}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>City: {user.address.city}</p>

      <Link to={`/users/${user.id}`}>
        View Details
      </Link>
    </div>
  );
}

export default UserCard;
