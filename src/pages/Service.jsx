import { Link, Outlet } from "react-router-dom";

function Service() {
  return (
    <div>
      <h1>Services</h1>
      <Link to="appdev">App Development</Link>
      <br />

      <Link to="webdev">Web Development</Link>
      <br />

      <Link to="uiux">UI/UX Design</Link>

           
<Outlet />
    </div>
  );
}

export default Service;