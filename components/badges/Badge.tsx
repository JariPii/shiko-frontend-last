import { cn } from '@/utils/cn';

type BadgeProps = {
  label: string;
  variant?: 'profile' | 'skills' | 'completed' | 'inProgress';
};

const Badge = ({ label, variant = 'profile' }: BadgeProps) => {
  const badgeVariants = {
    profile:
      'bg-accent/10 text-accent text-[10px] font-medium h-5 flex items-center justify-center px-2.5 py-1.5 border-[0.5px] border-accent/30 capitalize',
    skills:
      'bg-base px-4 py-2 border border-muted-text/20 text-muted-text uppercase',
    completed:
      'p-4 bg-[rgba(3,183,0,0.10)] text-[rgb(3,183,0)] text-[0.875rem] font-medium  capitalize',
    inProgress:
      'bg-accent/10 text-accent text-[0.875rem] font-medium flex items-center justify-center p-4 capitalize',
  };
  return (
    <div className={cn(`${badgeVariants[variant]} rounded-full w-fit`)}>
      {label}
    </div>
  );
};

export default Badge;
