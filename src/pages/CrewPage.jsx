// import { Header } from "../components/Header";
// import "./CrewPage.css";

// export function Crew() {
//   return (
//     <>
//       <main className="crew-page">
//         <Header />
//         <section className="crew-main-content">
//           <section className="crew-content">
//             <h1 className="crew-title">
//               <span className="title-number">02</span> Meet your crew
//             </h1>

//             <article className="crew-member active">
//               <p className="crew-role">Commander</p>
//               <h2 className="crew-name">Douglas Hurley</h2>

//               <p className="crew-description">
//                 Douglas Gerald Hurley is an American engineer, former Marine
//                 Corps pilot and former NASA astronaut. He launched into space
//                 for the third time as commander of Crew Dragon Demo-2.
//               </p>

//               <div className="crew-navigation">
//                 <button className="crew-dot active"></button>
//                 <button className="crew-dot"></button>
//                 <button className="crew-dot"></button>
//                 <button className="crew-dot"></button>
//               </div>
//             </article>
//           </section>

//           <div className="crew-image-container">
//             <img
//               src="/assets/crew/image-douglas-hurley.png"
//               alt="image-douglas-hurley"
//               className="crew-image"
//             />
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }

import { useState } from "react";
import { Header } from "../components/Header";
import data from "/data.json";
import "./CrewPage.css";

// index = the current selected crew memeber number
// setIndex = a function to change the selected crew member
// useState(0) = start with the first crew member (index 0)
//! index = 0  → first crew member is selected

// data.crew = the full crew list from data.json
// index = which one is selected
// data.crew[index] = the currently selected crew member object
export function Crew() {
  const [index, setIndex] = useState(0);
  const crewMember = data.crew[index]; // if the index is 1

  // create an array to hold the button elements
  const buttons = [];
  // [ button1, button2, button3, button4 ]

  //go through each crew member using a simple for loop
  for (let i = 0; i < data.crew.length; i++) {
    // 0 → 1 → 2 → 3
    // decide whether this button corresponds to the currently selected index
    let isActive;
    if (i === index) {
      isActive = true;
    } else {
      isActive = false;
    }
    // build the css class string: include "active" only when isActive is true
    let className;
    if (isActive) {
      className = "crew-dot active";
    } else {
      className = "crew-dot";
    }

    // create a button element and push it into the buttons array
    buttons.push(
      <button
        key={i}
        className={className}
        onClick={() => setIndex(i)}
        aria-label={`Show ${data.crew[i].name}`}
      />
    );
  }

  return (
    <main className="crew-page">
      <Header />
      <section className="crew-main-content">
        <section className="crew-content">
          <h1 className="crew-title">
            <span className="title-number">02</span> Meet your crew
          </h1>

          <article className="crew-member active">
            <p className="crew-role">{crewMember.role}</p>
            <h2 className="crew-name">{crewMember.name}</h2>

            <p className="crew-description">{crewMember.bio}</p>

            <div className="crew-navigation">{buttons}</div>
          </article>
        </section>

        <div className="crew-image-container">
          <img
            src={crewMember.images.png}
            alt={crewMember.name}
            className="crew-image"
          />
        </div>
      </section>
    </main>
  );
}
