import { LuInstagram } from 'react-icons/lu';

interface IProps {
  size?: number;
  title?: string;
}

export default function InstagramIcon({ size = 24, title }: IProps) {
  return <LuInstagram size={size} title={title || '인스타그램'} />;
}
