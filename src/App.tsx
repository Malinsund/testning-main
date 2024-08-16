import { useState } from "react";

import CountButton from "./components/CountButton";
import EndButton from "./components/EndButton";
import TodoForm from "./components/TodoForm";

interface Todo {
  text: string;
  count: number;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [currentTodo, setCurrentTodo] = useState<string | null>(null);

  const handleSubmit = (text: string) => {
    setTodos((prevTodos) => [...prevTodos, { text, count: 0 }]);
    setCurrentTodo(text);
  };

  const handleEnd = () => {
    setCurrentTodo(null);
  };

  return (
    <>
      <h1 className=" flex justify-center text-6xl m-4 ">🥃 Shotta 🥃</h1>

      <TodoForm onSubmit={handleSubmit} />

      <h2 className="flex justify-center text-xl">
        Såhär många shots varje gång...
      </h2>

      <div className="flex flex-col">
        {todos.map((todo) => (
          <div key={todo.text} className="mb-2">
            {todo.text === currentTodo ? (
              <h3 className="flex font-bold text-lg  justify-center">
                {todo.text}: {todo.count}
              </h3>
            ) : (
              <span className="flex font-thin text-gray-400  justify-center">
                {todo.text}: {todo.count}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <CountButton
          onCount={() => {
            if (currentTodo) {
              setTodos((prevTodos) =>
                prevTodos.map((todo) =>
                  todo.text === currentTodo
                    ? { ...todo, count: todo.count + 1 }
                    : todo
                )
              );
            }
          }}
        />

        <EndButton onEnd={handleEnd} />
      </div>
    </>
  );
}

export default App;
