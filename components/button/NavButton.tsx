import { cn } from '@/utils/cn';
import Link from 'next/link';

type NavButtonProps = {
  label: string;
  href: string;
  className?: string;
  icon?: React.ReactNode;
};

const NavButton = ({ label, href, icon, className }: NavButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'py-6 px-22.5 bg-accent font-semibold text-white text-2xl rounded-xl',
        className,
      )}
    >
      <span>{label}</span>
      {icon && <span>{icon}</span>}
    </Link>
  );
};

export default NavButton;
