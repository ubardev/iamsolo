import { BiLogOut } from 'react-icons/bi';

interface IProps {
  size?: number;
}

export default function LogoutIcon({ size = 24 }: IProps) {
  return <BiLogOut size={size} title="로그아웃" />;
}
