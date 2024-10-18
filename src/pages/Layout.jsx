import { Outlet, Link } from "react-router-dom";
import './Layout.css';

const Layout = () => {
  return (
    <>
      <nav>
        <div>
          <h1>Bem Vindo a Página</h1>
        </div>

        <div>
          <p>camarão</p>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </nav>
    </>
  );
};

export default Layout;
