import { FC } from "react";

interface Props {
  onEnd: () => void;
}

const EndButton: FC<Props> = ({ onEnd }) => {
  return (
    <button
      data-testid="end-button"
      className="border px-4 py-2 rounded"
      onClick={onEnd}
    >
      Avsluta räknandet
    </button>
  );
};

export default EndButton;
