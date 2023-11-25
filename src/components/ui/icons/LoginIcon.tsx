import { BiLogIn } from 'react-icons/bi';

interface IProps {
  size?: number;
}

export default function LoginIcon({ size = 24 }: IProps) {
  return <BiLogIn size={size} title="로그인" />;
}
