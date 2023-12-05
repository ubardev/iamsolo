import { AiFillDislike } from 'react-icons/ai';

interface IProps {
  size?: number;
  color?: string;
}

export default function DislikeIcon({ size = 24, color = 'black' }: IProps) {
  return <AiFillDislike size={size} title="싫어요" style={{ color }} />;
}
