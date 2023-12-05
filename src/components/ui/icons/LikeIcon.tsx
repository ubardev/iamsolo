import { AiFillLike } from 'react-icons/ai';

interface IProps {
  size?: number;
  color?: string;
}

export default function LikeIcon({ size = 24, color = 'black' }: IProps) {
  return <AiFillLike size={size} title="좋아요" style={{ color }} />;
}
