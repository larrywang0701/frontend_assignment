interface NavigationButtonProps {
  label: string;
  onClick: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="block w-full text-left bg-black text-white font-bold p-3 mb-2 hover:bg-gray-700"
    >
      {label}
    </button>
  );
};

export default NavigationButton;
