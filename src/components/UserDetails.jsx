import "./UserDetails.css";

function UserDetails({ user }) {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>

      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>City:</strong> {user.address.city}</p>
    </div>
  );
}

export default UserDetails;