import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { routes } from "../app/Routes/Routes";
const MainNav = () => {
  const navs = [
    { to: routes.home, label: "Home" },
    { to: routes.user, label: "Profile" },
    { to: routes.NOT_FOUND, label: "404" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div id="navbarNav">
        <List className="navbar-nav">
          {navs.map(({ label, to }) => (
            <ListItem key={`nav-${label}`} className="nav-item">
              <NavLinkItem
                activeClassName="active"
                to={to}
                className="nav-link"
              >
                {label}
              </NavLinkItem>
            </ListItem>
          ))}
        </List>
      </div>
    </nav>
  );
};

const List = styled.ul`
  display: flex;
`;
const ListItem = styled.li`
  width: 20vw;
  height: 10vh;
  list-style: none;
`;
const NavLinkItem = styled(NavLink)`
  text-decoration: none;
  color: black;
  &: hover {
    color: blue;
  }
`;
export default MainNav;
