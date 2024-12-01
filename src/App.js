import "./styles.css";
import { useState } from "react";
const questions = [
  {
    id: 1,
    title: "Is this a good product?",
    parag:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
  {
    id: 2,
    title: "How much does it cost?",
    parag:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
  {
    id: 3,
    title: "When can I get it?",
    parag:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
];

export default function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Project 2: FAQ/Accordion</h1>
      <Accordions />
    </div>
  );
}

function Accordions() {
  return (
    <div className="accordions">
      <h2>Frequently Asked Questions</h2>
      {questions.map((ques) => (
        <Accordion ques={ques} />
      ))}
    </div>
  );
}
function Accordion({ ques }) {
  const [open, setOpen] = useState(false);
  function handleOpenBtn() {
    setOpen((item) => !item);
  }
  return (
    <div className="acc">
      <div className="title">
        <h3>{ques.title}</h3>
        <button onClick={handleOpenBtn}>{open ? "-" : "+"}</button>
      </div>
      <p className={open ? "" : "hidden"}>{ques.parag}</p>
    </div>
  );
}
