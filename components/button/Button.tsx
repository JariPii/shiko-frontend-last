import { cn } from '@/utils/cn';

type ButtonProps = {
  label: string;
  className?: string;
};

const Button = ({ label, className }: ButtonProps) => {
  return (
    <>
      <button
        className={cn(
          'bg-accent text-surface font-semibold w-fit p-4 rounded-xl hover:bg-accent/70 hover:cursor-pointer hover:text-black',
          className,
        )}
        type='submit'
      >
        {label}
      </button>
    </>
  );
};
export default Button;
