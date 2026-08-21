import { IconType } from 'react-icons';
import { TbLayoutDashboard, TbUser } from 'react-icons/tb';
import { PiTestTubeFill } from 'react-icons/pi';
import { RiGraduationCapLine } from 'react-icons/ri';
import { CiCalendarDate } from 'react-icons/ci';
import { LuVideo } from 'react-icons/lu';
import { BsPerson, BsPersonAdd } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { HiUserGroup, HiUsers } from 'react-icons/hi';

type LinkItem = {
  icon: IconType;
  label: string;
  href: string;
};

export const menuLinks: LinkItem[] = [
  { icon: TbLayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: RiGraduationCapLine, label: 'Courses', href: '/courses' },
  { icon: CiCalendarDate, label: 'Calendar', href: '/calendar' },
  { icon: LuVideo, label: 'Live Class', href: '/live' },
  // { label: 'Login', href: '/login' },
  // { label: 'Srignin', href: '/signin' },
];

export const generalLinks: LinkItem[] = [
  { icon: BsPerson, label: 'Profile', href: '/profile' },
  { icon: HiUserGroup, label: 'Team', href: '/team' },
  { icon: PiTestTubeFill, label: 'Settings', href: '/test1' },
  { icon: PiTestTubeFill, label: 'Help Center', href: '/test2' },
  { icon: PiTestTubeFill, label: 'Logout', href: '/test' },
];
