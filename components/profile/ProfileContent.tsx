import { jwtDecode } from 'jwt-decode';
import ProfileSideBar from './ProfileSideBar';
import { userService } from '@/lib/api/userActions';

type JwtPayload = {
  'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'?:
    | string
    | string[];
};

const ProfileContent = async () => {
  const token = process.env.DEV_TOKEN;
  if (!token) throw new Error('DEV_TOKEN saknas i .env');

  const decoded = jwtDecode<JwtPayload>(token);
  const rawRole =
    decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
  const role = Array.isArray(rawRole) ? rawRole[0] : rawRole;

  const user = await userService.getMe(token);
  if (!user) return null;

  return (
    <ProfileSideBar
      firstName={user.firstName}
      lastName={user.lastName}
      avatarUrl={user.avatarUrl ?? undefined}
      role={role}
    />
  );
};

export default ProfileContent;
