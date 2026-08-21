import Button from '@/components/button/Button';
import InputField from '@/components/form/InputField';
import { ShikoLogo } from '@/components/logo/ShikoLogo';
import Image from 'next/image';

const SigninPage = () => {
  return (
    <section className='bg-surface flex w-full h-full rounded-4xl gap-25'>
      <div className='relative h-full aspect-900/1080'>
        <Image src='/images/auth-img.png' alt='' fill className='' />
        <ShikoLogo className='absolute top-10 left-10 w-51.25 h-12.5 text-white' />
        {/* <Image
          src='/images/logo.svg'
          alt='Shiko Logotype'
          width={205}
          height={50}
          className='absolute top-20 left-20'
        ></Image> */}
      </div>
      <div className='max-w-2xl flex flex-col justify-center gap-5'>
        <h1 className='text-7xl font-medium'>Welcome</h1>
        <p className='text-xl text-muted-text'>
          Please log in to your account to continue.
        </p>
        <form action='' className='py-8'>
          <InputField
            name='email'
            type='email'
            label='Email address'
            placeholder='Type your email address'
          />
          <Button label='Sign in' />
        </form>
      </div>
    </section>
  );
};
export default SigninPage;
