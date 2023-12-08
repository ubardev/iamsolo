import { EMOTION_TYPE } from '@/constants/common';
import { IMyEmotions } from '@/types/emotion';
import useSWR from 'swr';

async function updateEmotion(
  emotionType: EMOTION_TYPE,
  generationId: number,
  memberId: number,
) {
  return fetch('/api/emotion', {
    method: 'PUT',
    body: JSON.stringify({ emotionType, generationId, memberId }),
  }).then((response) => response.json());
}

export default function useEmotions(generationId: number) {
  const emotionCountApi = `/api/generations/${generationId}/members/emotion-count`;
  const myEmotionApi = `/api/emotion/my/${generationId}`;

  const {
    data: emotionCounts,
    isLoading,
    error,
    mutate: mutateEmotionCounts,
  } = useSWR<any>(emotionCountApi);
  const { data: myEmotions, mutate: mutateMyEmotion } =
    useSWR<IMyEmotions>(myEmotionApi);

  const setEmotion = (
    emotionType: EMOTION_TYPE,
    memberId: number,
    isAlreadyEmotion: boolean,
  ) => {
    /** TODO: optimisticData 사용 처리
    const targetNewEmotionCount = emotionCounts[memberId];

    if (emotionType === EMOTION_TYPE.like) {
      targetNewEmotionCount.likeCount =
        targetNewEmotionCount.likeCount + (isAlreadyEmotion ? -1 : 1);
    }

    if (emotionType === EMOTION_TYPE.dislike) {
      targetNewEmotionCount.dislikeCount =
        targetNewEmotionCount.dislikeCount + (isAlreadyEmotion ? -1 : 1);
    }

    const newEmotionCounts = {
      ...emotionCounts,
      [memberId]: targetNewEmotionCount,
    };

    const updatedEmotion = updateEmotion(emotionType, generationId, memberId);

    return mutateEmotionCounts(updatedEmotion, {
      optimisticData: newEmotionCounts,
      populateCache: false,
      revalidate: false,
      rollbackOnError: true,
    });
    */

    return updateEmotion(emotionType, generationId, memberId)
      .then(() => mutateEmotionCounts())
      .then(() => mutateMyEmotion());
  };

  return { emotionCounts, myEmotions, isLoading, error, setEmotion };
}
