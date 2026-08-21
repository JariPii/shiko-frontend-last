import NavButton from '@/components/button/NavButton';
import { ButtonArrow } from '@/components/svgs/ButtonArrow';
import Image from 'next/image';

const NotFoundPage = () => {
  return (
    <div className='bg-primary h-full flex flex-col items-center justify-center gap-8 rounded-2xl'>
      <div className='flex gap-4'>
        <Image
          src='/images/freepik--character-1--inject-54.svg'
          alt=''
          width={0}
          height={0}
          className='w-37.5 h-auto'
        />
        <Image
          src='/images/freepik--character-2--inject-54.svg'
          alt=''
          width={0}
          height={0}
          className='w-37.5 h-auto'
        />
        <Image
          src='/images/freepik--character-3--inject-54.svg'
          alt=''
          width={0}
          height={0}
          className='w-37.5 h-auto'
        />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-2xl font-bold text-white'>Page Not Found!</h1>
        <p className='text-muted-text'>
          Sorry, the page you are looking for doesn’t exist or has been removed.
          Keep exploring our site.
        </p>
      </div>
      {/* <NavButton
        href='/'
        label='Back to Home'
        className='flex items-center justify-center gap-4'
        icon={<ButtonArrow className='' />}
      /> */}
    </div>
  );
};

export default NotFoundPage;
