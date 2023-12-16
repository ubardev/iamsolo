import { AiOutlineLink } from 'react-icons/ai';

interface IProps {
  size?: number;
  title?: string;
}

export default function LinkIcon({ size = 24, title }: IProps) {
  return <AiOutlineLink size={size} title={title || 'Link'} />;
}
