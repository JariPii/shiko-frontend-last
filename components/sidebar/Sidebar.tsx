import Logo from '@/components/header/Logo';
import LinksContainer from './LinksContainer';

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-7.5'>
      <Logo />
      <LinksContainer />
    </div>
  );
};

export default Sidebar;
