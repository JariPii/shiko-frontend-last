const ProfileSideBarSkeleton = () => (
  <div className='flex flex-col items-center bg-surface p-2.5 rounded-2xl gap-15 animate-pulse'>
    <div className='w-full h-32 bg-gray-200 rounded-xl' />
    <div className='flex flex-col items-center gap-2 mt-12'>
      <div className='h-6 w-40 bg-gray-200 rounded' />
      <div className='h-5 w-20 bg-gray-200 rounded-full' />
    </div>
  </div>
);

export default ProfileSideBarSkeleton;
