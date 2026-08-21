import Tab from '@/components/navigation/Tab';
import { tabLinks } from '@/utils/tabLinks';
import { Suspense } from 'react';
import ProfileSideBarSkeleton from '@/components/profile/ProfileSideBarSkeleton';
import ProfileContent from '@/components/profile/ProfileContent';

const ProfilePage = () => {
  return (
    <div className='h-screen flex flex-col gap-5'>
      <h1 className='text-primary font-semibold text-[2.8125rem] mb-2.5'>
        Profile
      </h1>
      <div className='flex gap-6'>
        {tabLinks.map((tab) => (
          <Tab key={tab.href} href={tab.href} label={tab.label} />
        ))}
      </div>
      <div className='grid grid-cols-[28.125rem_1fr] min-h-screen flex-1 gap-4 overflow-y-scroll'>
        {/* {user && (
          <ProfileSideBar
            email={user.email}
            firstName={user.firstName}
            lastName={user.lastName}
            avatarUrl={user.avatarUrl ?? undefined}
          />
        )} */}
        <Suspense fallback={<ProfileSideBarSkeleton />}>
          <ProfileContent />
        </Suspense>
        <div className='bg-surface rounded-2xl p-2.5'>Content</div>
      </div>
    </div>
  );
};

export default ProfilePage;
