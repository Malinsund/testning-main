import { FormEvent, useState } from "react";

interface Props {
  onSubmit: (text: string) => void;
}

export default function TodoForm(props: Props) {
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.onSubmit(text);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex items-center relative group">
        <div>En shot varje gång...</div>
        <input
          type="text"
          placeholder="Anledning till shot's"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 rounded-md"
        />
      </div>
      <button>Save</button>
    </form>
  );
}
