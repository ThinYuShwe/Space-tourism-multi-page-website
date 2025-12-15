// import { Header } from "../components/Header.jsx";
// import "./TechnologyPage.css";

// export function Technology() {
//   return (
//     <>
//       <main className="technology-page">
//         <Header />
//         <section className="technology-wrapper">
//           <div className="technology-header">
//             <h1 className="technology-title">
//               <span className="title-number">03</span> Space launch 101
//             </h1>
//           </div>

//           <section className="technology-main-content">
//             <div className="technology-image-container">
//               <img
//                 src="/assets/technology/image-launch-vehicle-portrait.jpg"
//                 alt="launch vehicle image"
//                 className="technology-image"
//               />
//             </div>

//             <section className="technology-content-section">
//               <div className="technology-buttons">
//                 <button className="tech-btn active">1</button>
//                 <button className="tech-btn">2</button>
//                 <button className="tech-btn">3</button>
//               </div>

//               <article className="technology-content">
//                 <p className="tech-subtitle">The terminology...</p>
//                 <h2 className="tech-name">Launch vehicle</h2>
//                 <p className="tech-description">
//                   A launch vehicle or carrier rocket is a rocket-propelled
//                   vehicle used to carry a payload from Earth's surface to space,
//                   usually to Earth orbit or beyond. Our WEB-X carrier rocket is
//                   the most powerful in operation. Standing 150 metres tall, it's
//                   quite an awe-inspiring sight on the launch pad!
//                 </p>
//               </article>
//             </section>
//           </section>
//         </section>
//       </main>
//     </>
//   );
// }

import { Header } from "../components/Header.jsx";
import "./TechnologyPage.css";
import "../index.css";
import { useState } from "react";
import data from "/data.json";

export function Technology() {
  const [index, setIndex] = useState(0);
  const technology = data.technology[index];

  const buttons = [];

  for (let i = 0; i < data.technology.length; i++) {
    let isActive;
    if (i === index) {
      isActive = true;
    } else {
      isActive = false;
    }

    let className;
    if (isActive) {
      className = "tech-btn active";
    } else {
      className = "tech-btn";
    }

    buttons.push(
      <button
        key={i}
        className={className}
        onClick={() => setIndex(i)}
        aria-label={`Show ${data.technology[i].name}`}
      >
        {i + 1}
      </button>
    );
  }
  return (
    <>
      <main className="technology-page">
        <Header />
        <section className="technology-wrapper">
          <div className="technology-header">
            <h1 className="technology-title">
              <span className="title-number">03</span> Space launch 101
            </h1>
          </div>

          <section className="technology-main-content">
            <div className="technology-image-container">
              <img
                src={technology.images.portrait}
                alt={technology.name}
                className="technology-image"
              />
            </div>

            <section className="technology-content-section">
              <div className="technology-buttons">{buttons}</div>

              <article className="technology-content">
                <p className="tech-subtitle">The terminology...</p>
                <h2 className="tech-name">{technology.name}</h2>
                <p className="tech-description">{technology.description}</p>
              </article>
            </section>
          </section>
        </section>
      </main>
    </>
  );
}
