import { LuInstagram } from 'react-icons/lu';

interface IProps {
  size?: number;
}

export default function InstagramIcon({ size = 24 }: IProps) {
  return <LuInstagram size={size} />;
}
