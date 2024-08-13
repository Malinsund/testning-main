import { FC } from "react";

interface Props {
  onEnd: () => void;
}

const EndButton: FC<Props> = ({ onEnd }) => {
  return (
    <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onEnd}>
      Avsluta räknandet
    </button>
  );
};

export default EndButton;
