import Image from 'next/image';
import profileBg from '../../public/images/prifile-avatar-bg.png';
import { LuPencilLine } from 'react-icons/lu';
import Badge from '../badges/Badge';
import { IconType } from 'react-icons';

type ProfileSidebarProps = {
  firstName: string;
  lastName: string;
  phoneNumber?: string | null;
  avatarUrl?: string;
  icon?: IconType;
  role?: string;
};

const ProfileSideBar = ({
  firstName,
  lastName,
  avatarUrl,
  icon,
  role,
}: ProfileSidebarProps) => {
  return (
    <div className='flex flex-col items-center bg-surface p-2.5 rounded-3xl gap-15'>
      <div className='relative'>
        <Image src={profileBg} alt='' className='' />
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-surface h-25 w-25 z-10 rounded-full flex items-center justify-center p-0.75'>
          {avatarUrl ? (
            <div className='relative bg-gray-400 h-full w-full rounded-full'></div>
          ) : (
            <div className='relative bg-red-300 h-full w-full rounded-full'></div>
          )}
          <div className='absolute h-7 w-7 rounded-full z-30 bg-accent right-1 bottom-1 flex items-center justify-center'>
            <LuPencilLine height={10} className='text-white' />
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <h2 className='text-primary text-2xl font-semibold'>
          {firstName} {lastName}
        </h2>
        <Badge label={role ?? 'Student'} variant='profile' />
      </div>
    </div>
  );
};

export default ProfileSideBar;
