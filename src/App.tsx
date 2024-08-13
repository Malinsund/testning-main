import { useState } from "react";
import "./App.css";
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
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.text === currentTodo ? { ...todo, count: todo.count + 1 } : todo
      )
    );
    setCurrentTodo(null);
  };

  return (
    <>
      <h1 className="text-red-500">Shotta</h1>

      <TodoForm onSubmit={handleSubmit} />

      <h2>Såhär många shots...</h2>

      <div>
        {todos.map((todo) => (
          <div key={todo.text} className="mb-2">
            <span className="font-bold">{todo.text}: </span>
            <span>{todo.count}</span>
          </div>
        ))}
      </div>

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
    </>
  );
}

export default App;
