import React, { useContext } from "react";
import Contex from "./../Contex/Contex";
import ShowTask from "./ShowTask";

export default function AllTask() {
  const { Alltask } = useContext(Contex);

  return (
    <div>
      <ul>
      {Alltask.map((p) => (
        <li key={p.id}><ShowTask
          name={p.name}
          Description={p.Description}
          checked={p.checked}
          id={p.id}
        /></li>
      ))}
      </ul>
    </div>
  );
}
