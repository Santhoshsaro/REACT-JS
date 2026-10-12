import { useSearchParams } from "react-router-dom";
import "./user.css";

function PaginationUsers() {
  const [searchParams, setSearchParams] = useSearchParams();

  const users = [
    {
      id: 1,
      name: "Arun",
      email: "arun@gmail.com",
      age: 22,
      city: "Chennai",
    },
    {
      id: 2,
      name: "Bala",
      email: "bala@gmail.com",
      age: 23,
      city: "Coimbatore",
    },
    {
      id: 3,
      name: "Charan",
      email: "charan@gmail.com",
      age: 21,
      city: "Madurai",
    },
    {
      id: 4,
      name: "Deepak",
      email: "deepak@gmail.com",
      age: 24,
      city: "Salem",
    },
    {
      id: 5,
      name: "Elango",
      email: "elango@gmail.com",
      age: 22,
      city: "Erode",
    },
    {
      id: 6,
      name: "Gokul",
      email: "gokul@gmail.com",
      age: 25,
      city: "Chennai",
    },
    {
      id: 7,
      name: "Hari",
      email: "hari@gmail.com",
      age: 23,
      city: "Trichy",
    },
    {
      id: 8,
      name: "Irfan",
      email: "irfan@gmail.com",
      age: 21,
      city: "Madurai",
    },
    {
      id: 9,
      name: "Jeeva",
      email: "jeeva@gmail.com",
      age: 24,
      city: "Salem",
    },
    {
      id: 10,
      name: "Karthik",
      email: "karthik@gmail.com",
      age: 22,
      city: "Coimbatore",
    },
    {
      id: 11,
      name: "Lokesh",
      email: "lokesh@gmail.com",
      age: 25,
      city: "Chennai",
    },
    {
      id: 12,
      name: "Manoj",
      email: "manoj@gmail.com",
      age: 23,
      city: "Erode",
    },
    {
      id: 13,
      name: "Naveen",
      email: "naveen@gmail.com",
      age: 21,
      city: "Trichy",
    },
    {
      id: 14,
      name: "Prakash",
      email: "prakash@gmail.com",
      age: 24,
      city: "Madurai",
    },
    {
      id: 15,
      name: "Rahul",
      email: "rahul@gmail.com",
      age: 22,
      city: "Salem",
    },
    {
      id: 16,
      name: "Sanjay",
      email: "sanjay@gmail.com",
      age: 25,
      city: "Chennai",
    },
    {
      id: 17,
      name: "Surya",
      email: "surya@gmail.com",
      age: 23,
      city: "Coimbatore",
    },
    {
      id: 18,
      name: "Vijay",
      email: "vijay@gmail.com",
      age: 21,
      city: "Erode",
    },
    {
      id: 19,
      name: "Vimal",
      email: "vimal@gmail.com",
      age: 24,
      city: "Trichy",
    },
    {
      id: 20,
      name: "Yuvan",
      email: "yuvan@gmail.com",
      age: 22,
      city: "Madurai",
    },
  ];

  const recordsPerPage = 5;

  const page = Number(searchParams.get("page")) || 1;

  const totalPages = Math.ceil(users.length / recordsPerPage);

  const startIndex = (page - 1) * recordsPerPage;

  const currentUsers = users.slice(
    startIndex,
    startIndex + recordsPerPage
  );

  const changePage = (newPage) => {
    setSearchParams({ page: newPage });
  };

  return (
    <div className="container">
      <h1>User List</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.city}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          onClick={() => changePage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => changePage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PaginationUsers;