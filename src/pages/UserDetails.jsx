import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("User Not Found");
        }

        return response.json();
      })
      .then((data) => {
        if (!data.id) {
          throw new Error("User Not Found");
        }

        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return (
      <div>
        <h2>User Not Found</h2>
        <Link to="/">Back to Users</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>User Details</h1>

      <p><b>ID:</b> {user.id}</p>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Username:</b> {user.username}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>Website:</b> {user.website}</p>
      <p><b>City:</b> {user.address.city}</p>

      <Link to="/">Back to Users</Link>
    </div>
  );
}

export default UserDetails;