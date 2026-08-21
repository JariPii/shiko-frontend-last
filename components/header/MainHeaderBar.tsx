const MainHeaderBar = () => {
  return (
    <div className='flex items-center justify-end p-7.5 w-full bg-surface h-24 rounded-2xl'>
      <div className='flex flex-col'>
        <p>FirstName LastName</p>
        <span className='text-muted-text'>email@email.com</span>
      </div>
    </div>
  );
};

export default MainHeaderBar;
