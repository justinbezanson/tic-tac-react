import { useState } from "react";
import Cell from "./components/Cell";
import Messages from "./components/Messages";

export default function App() {
  const [message] = useState("Welcome to Tic Tac React!");

  return (
    <div>
      <h1 className="text-4xl text-center m-12">Tic Tac React</h1>

      <Messages message={message} />

      <div className="grid grid-cols-3 gap-2 w-full max-w-[300px] aspect-square mx-auto mt-12">
        <Cell />
        <Cell />
        <Cell />

        <Cell />
        <Cell />
        <Cell />

        <Cell />
        <Cell />
        <Cell />
      </div>
    </div>
  );
}
