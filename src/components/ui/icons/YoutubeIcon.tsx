import { AiOutlineYoutube } from 'react-icons/ai';

interface IProps {
  size?: number;
}

export default function YoutubeIcon({ size = 24 }: IProps) {
  return <AiOutlineYoutube size={size} title="유튜브" />;
}
