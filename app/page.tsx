import Link from "next/link";
import ToDoList from "./components/TodoList";
import NewDen from "./components/NewDen";
import Deno from "./components/Deno";

export default function Home() {
  return (
    <main className="">
      {/* Add A Link tag */}
      <Link
        href="/todo/create"
        className="block mx-auto text-4xl font-bold mb-5 w-1/2 text-center pt-12 px-4 underline"
      >
        Add a To-Do
      </Link>
      <Deno />
      <NewDen />
      <ToDoList />
    </main>
  );
}
