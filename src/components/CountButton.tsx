import { FC } from "react";
interface Props {
  onCount: () => void;
}

const CountButton: FC<Props> = ({ onCount }) => {
  return (
    <div className="flex justify-center">
      <button
        className="border rounded-md py-2 px-6"
        data-testid="count-button"
        onClick={onCount}
      >
        Öka
      </button>
    </div>
  );
};

export default CountButton;
