// import { Header } from "../components/Header";
// import "./DestinationPage.css";
// import "../index.css";

// export function Destination() {
//   return (
//     <>
//       <main className="destination-page">
//         <Header />
//         <section className="destination-main-content">
//           <div className="destination-header">
//             <h1 className="destination-title">
//               <span className="title-number">01</span>
//               Pick your destination
//             </h1>
//             <img
//               src="/assets/destination/image-moon.png"
//               alt="moon-img"
//               className="destination-image"
//             />
//           </div>

//           <article className="destination-content">
//             <ul className="planet-tabs">
//               <li className="planet-tab active">Moon</li>
//               <li className="planet-tab">Mars</li>
//               <li className="planet-tab">Europa</li>
//               <li className="planet-tab">Titan</li>
//             </ul>

//             <h2 className="planet-name">Moon</h2>

//             <p className="planet-description">
//               See our planet as you’ve never seen it before. A perfect relaxing
//               trip away to help regain perspective and come back refreshed.
//               While you’re there, take in some history by visiting the Luna 2
//               and Apollo 11 landing sites.
//             </p>
//             <hr />
//             <div className="planet-stats">
//               <div className="planet-stat">
//                 <p className="stat-label">Avg. Distance</p>
//                 <p className="stat-value">384,400 KM</p>
//               </div>
//               <div className="planet-stat">
//                 <p className="stat-label">Est. travel time</p>
//                 <p className="stat-value">3 days</p>
//               </div>
//             </div>
//           </article>
//         </section>
//       </main>
//     </>
//   );
// }

import { Header } from "../components/Header";
import "./DestinationPage.css";
import "../index.css";
import { useState } from "react";
import data from "/data.json";

// index = the current selected planet
// setIndex = a function to change the selected planet
// useState(0) = start with the first planet(index 0)
export function Destination() {
  const [index, setIndex] = useState(0);
  const planet = data.destinations[index];

  const planetTabs = [];

  for (let i = 0; i < data.destinations.length; i++) {
    let isActive;
    if (i === index) {
      isActive = true;
    } else {
      isActive = false;
    }

    let className;
    if (isActive) {
      className = "planet-tab active";
    } else {
      className = "planet-tab";
    }

    planetTabs.push(
      <li
        key={i}
        className={className}
        onClick={() => setIndex(i)}
        aria-label={`Show ${data.destinations[i].name}`}
      >
        {data.destinations[i].name}
      </li>
    );
  }

  return (
    <>
      <main className="destination-page">
        <Header />
        <div className="destination-main-content-wrapper">
          <section className="destination-main-content">
            <div className="destination-header">
              <h1 className="destination-title">
                <span className="title-number">01</span>
                Pick your destination
              </h1>
              <img
                src={planet.images.png}
                alt={planet.name}
                className="destination-image"
              />
            </div>

            <article className="destination-content">
              <ul className="planet-tabs">{planetTabs}</ul>

              <h2 className="planet-name">{planet.name}</h2>

              <p className="planet-description">{planet.description}</p>
              <hr />
              <div className="planet-stats">
                <div className="planet-stat">
                  <p className="stat-label">Avg. Distance</p>
                  <p className="stat-value">{planet.distance}</p>
                </div>
                <div className="planet-stat">
                  <p className="stat-label">Est. travel time</p>
                  <p className="stat-value">{planet.travel}</p>
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>
    </>
  );
}
