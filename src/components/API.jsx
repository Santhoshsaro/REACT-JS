import { useEffect, useRef, useState } from "react";
import "./API.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [image, setImage] = useState(null);

  const fileInputRef = useRef(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  if (loading) {
    return <h2 className="message">Loading users...</h2>;
  }

  if (error) {
    return <h2 className="error">{error}</h2>;
  }

  return (
    <div className="app">

      <h1>React API & Image Upload</h1>

      <section className="upload-section">
        <h2>Upload Profile Image</h2>

        <button
          className="upload-btn"
          onClick={() => fileInputRef.current.click()}
        >
          Upload Image
        </button>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          hidden
        />

        {image && (
          <div className="preview">
            <img src={image} alt="Selected" />

            <button
              className="change-btn"
              onClick={() => fileInputRef.current.click()}
            >
              Change Image
            </button>
          </div>
        )}
      </section>

      <section className="users-section">
        <h2>Users List</h2>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}

export default App;
