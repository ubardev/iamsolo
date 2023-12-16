import { AiOutlineYoutube } from 'react-icons/ai';

interface IProps {
  size?: number;
  title?: string;
}

export default function YoutubeIcon({ size = 24, title }: IProps) {
  return <AiOutlineYoutube size={size} title={title || 'Youtube'} />;
}
