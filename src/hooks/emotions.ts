import { EMOTION_TYPE } from '@/constants/common';
import { convertLength } from '@mui/material/styles/cssUtils';
import useSWR, { useSWRConfig } from 'swr';

export default function useEmotions(generationId: number) {
  const emotionApiKey = `/api/generations/${generationId}/members/emotion-count`;
  const { mutate } = useSWRConfig();

  const { data: emotionCounts, isLoading, error } = useSWR<any>(emotionApiKey);

  const setEmotion = (emotionType: EMOTION_TYPE, memberId: number) => {
    fetch('/api/emotion', {
      method: 'PUT',
      body: JSON.stringify({ emotionType, generationId, memberId }),
    }).then(() => mutate(emotionApiKey));
  };

  return { emotionCounts, isLoading, error, setEmotion };
}
