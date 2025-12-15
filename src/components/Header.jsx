// import { Link } from "react-router";
// import "./Header.css";
// import "../index.css";
// // import { useState } from "react";

// export function Header() {
//   // const [open, setOpen] = useState(false);
//   return (
//     <header className="site-header">
//       <div className="logo-container">
//         <img src="./assets/shared/logo.svg" alt="logo" className="logo" />
//       </div>
//       <ul className="nav-links">
//         <li>
//           <Link to="/" className="nav-link active">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/DestinationPage" className="nav-link">
//             Destination
//           </Link>
//         </li>
//         <li>
//           <Link to="/CrewPage" className="nav-link">
//             Crew
//           </Link>
//         </li>
//         <li>
//           <Link to="/TechnologyPage" className="nav-link">
//             Technology
//           </Link>
//         </li>
//       </ul>
//     </header>
//   );
// }

import { Link } from "react-router";
import { NavLink } from "react-router";

import "./Header.css";
import "../index.css";
import { useState } from "react";

// useState is used to manage the open/close state of the hamburger menu

export function Header() {
  // Declare the header component so other files can use it
  // Create a state variable 'open' to track if the hamburger menu is opened or closed.
  // Initially, it is set to false which is closed.
  // setOpen is the function to update the 'open' state.
  // onClick event handler on the hamburger: when the user clicks the icon, call the setOpen
  // true, this changes open to true and telling react to show the mobile menu
  // for the Open state like {open && (...)}, it is the short way to say, if the open is true, render the stuff inside the (...). If open is false, react renders nothing here.

  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="logo-container">
        <img src="./assets/shared/logo.svg" alt="logo" className="logo" />
      </div>
      <div className="line"></div>
      {/* <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/DestinationPage" className="nav-link">
            Destination
          </Link>
        </li>
        <li>
          <Link to="/CrewPage" className="nav-link">
            Crew
          </Link>
        </li>
        <li>
          <Link to="/TechnologyPage" className="nav-link">
            Technology
          </Link>
        </li>
      </ul> */}
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/DestinationPage"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Destination
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/CrewPage"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Crew
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/TechnologyPage"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Technology
          </NavLink>
        </li>
      </ul>

      <img
        src="/assets/shared/icon-hamburger.svg"
        alt=""
        className="hamburger"
        onClick={() => setOpen(true)}
      />
      {open && (
        <div className="onClickHamburger">
          <img
            src="/assets/shared/icon-close.svg"
            alt=""
            className="icon-close"
            onClick={() => setOpen(false)}
          />

          <ul className="dropDownByHamburger">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "dropDown-nav-link active" : "dropDown-nav-link"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/DestinationPage"
                className={({ isActive }) =>
                  isActive ? "dropDown-nav-link active" : "dropDown-nav-link"
                }
              >
                Destination
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/CrewPage"
                className={({ isActive }) =>
                  isActive ? "dropDown-nav-link active" : "dropDown-nav-link"
                }
              >
                Crew
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/TechnologyPage"
                className={({ isActive }) =>
                  isActive ? "dropDown-nav-link active" : "dropDown-nav-link"
                }
              >
                Technology
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
