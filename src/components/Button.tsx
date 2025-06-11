const Button = ({ content, styles }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`py-3 px-8 border-1 font-semibold rounded-full cursor-pointer ${styles}`}
    >
      {content}
    </button>
  );
};

interface ButtonProps {
  content: string;
  styles: string;
}

export default Button;
