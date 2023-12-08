import { EMOTION_TYPE } from '@/constants/common';
import { IMyEmotions } from '@/types/emotion';
import useSWR, { useSWRConfig } from 'swr';

export default function useEmotions(generationId: number) {
  const emotionCountApi = `/api/generations/${generationId}/members/emotion-count`;
  const myEmotionApi = `/api/emotion/my/${generationId}`;
  const { mutate } = useSWRConfig();

  const {
    data: emotionCounts,
    isLoading,
    error,
  } = useSWR<any>(emotionCountApi);
  const { data: myEmotions } = useSWR<IMyEmotions>(myEmotionApi);

  const setEmotion = (emotionType: EMOTION_TYPE, memberId: number) => {
    fetch('/api/emotion', {
      method: 'PUT',
      body: JSON.stringify({ emotionType, generationId, memberId }),
    }).then(() => mutate(emotionCountApi));
  };

  return { emotionCounts, myEmotions, isLoading, error, setEmotion };
}
