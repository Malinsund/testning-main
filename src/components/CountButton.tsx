import { FC } from "react";
interface Props {
  onCount: () => void;
}

const CountButton: FC<Props> = ({ onCount }) => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded"
      onClick={onCount}
    >
      Öka
    </button>
  );
};

export default CountButton;
