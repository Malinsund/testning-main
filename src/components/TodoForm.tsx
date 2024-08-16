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
    <form onSubmit={handleSubmit} className="flex justify-center flex-row m-8">
      <div className="flex flex-col justify-center">
        <div className="flex justify-center p-4 text-2xl">
          En shot varje gång...
        </div>
        <input
          data-testid="only-input"
          type="text"
          placeholder="Anledning till shot's"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 rounded-md w-96"
        />
        <button
          className="mx-36 p-2 border rounded-md w-4/12 "
          data-testid="save-button"
        >
          Save
        </button>
      </div>
    </form>
  );
}
