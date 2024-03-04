import axios from "axios";
import React from "react";

export default function Deno() {
  console.log("calisiyor");
  const addNewTodo = async (FormData: FormData) => {
    "use server";
    const number1 = FormData.get("num1");
    const number2 = FormData.get("num2");

    console.log(number1);
  };
  return (
    <div>
      Mydeno
      <form action={addNewTodo}>
        <label>num1</label>
        <input className="text-black" name="num1" />
        <label>adsda</label>
        <input className="text-black" name="num2" />
        <button>send</button>
      </form>
    </div>
  );
}
