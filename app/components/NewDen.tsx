import React from "react";

async function NewDen() {
  const mydata = await fetch("http://localhost:3000/api/todos");
  return (
    <div>
      <div>asdasd</div>
      NewDen
    </div>
  );
}

export default NewDen;
