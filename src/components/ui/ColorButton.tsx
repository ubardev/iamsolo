type Props = {
  text: string;
  onClick: () => void;
  size?: 'large' | 'medium' | 'small';
};

export default function ColorButton({ text, onClick, size = 'medium' }: Props) {
  return (
    <div
      className={`rounded-md bg-red-300 
      ${
        size === 'large'
          ? 'p-[0.3rem]'
          : 'medium'
          ? 'p-[0.15rem]'
          : 'p-[0.05rem]'
      }`}
    >
      <button
        className={`rounded-sm text-base hover:opacity-90 transition-opacity bg-white 
        ${size === 'large' ? 'p-4 text-2xl' : 'p-[0.3rem] text-base'}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
