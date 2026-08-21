import { cn } from '@/utils/cn';
import Link from 'next/link';

type NavTabProps = {
  variant?: 'isActive' | '!isActive';
  href: string;
  label: string;
};

const Tab = ({ variant = '!isActive', href, label }: NavTabProps) => {
  const isActive = variant === 'isActive';
  return (
    <Link
      href={href}
      className={cn(
        'px-6 py-4.5 text-2xl hover:bg-primary hover:text-white hover:rounded-lg',
        isActive
          ? 'bg-primary text-white rounded-lg'
          : 'bg-base text-muted-text',
      )}
    >
      {label}
    </Link>
  );
};

export default Tab;
