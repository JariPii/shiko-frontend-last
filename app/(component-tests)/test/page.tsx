import Badge from '@/components/badges/Badge';
import Button from '@/components/button/Button';
import MainHeaderBar from '@/components/header/MainHeaderBar';

const TestPage = () => {
  return (
    <div className='flex flex-col gap-7.5'>
      <Button />
      <Badge>Label</Badge>
    </div>
  );
};

export default TestPage;
