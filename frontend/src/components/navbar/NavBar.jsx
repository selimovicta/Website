import React from "react";
import Container from "react-bootstrap/Container";
import "./navbar.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { clearState } from "../../features/auth/userSlice";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const user = localStorage.getItem("token");
  const userName = localStorage.getItem("user_name");
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const Dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    localStorage.removeItem("user_name");
    navigate("/log-in");
    Dispatch(clearState());
  };
  return (
    <Container fluid className="flex-column g-0 ">
      <Navbar className="w-100 p-2 bg-light">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a href={`/users/${userId}`} className="nav-link">
                Profile
              </a>
            </li>
            <Link className="btn btn-primary" to="/">
              Feed
            </Link>
          </ul>
          <ul className="navbar-nav ms-auto">
            {user ? (
              <li className="nav-item">
                <Button className="nav-link logout-btn" onClick={logout}>
                  Logout
                </Button>
              </li>
            ) : (
              <React.Fragment>
                <li className="nav-item">
                  <Link className="nav-link" to="/sign-up">
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/log-in">
                    Login
                  </Link>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </Navbar>
    </Container>
  );
};

export default NavBar;
