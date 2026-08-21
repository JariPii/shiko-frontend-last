type ButtonArrowProps = {
  className?: string;
};

export const ButtonArrow = ({ className }: ButtonArrowProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      className={className}
    >
      <path
        d='M14.8669 4.26026L4.26031 14.8669'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M6.32916 4.27763L14.8668 4.25924L14.8491 12.7976'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};
