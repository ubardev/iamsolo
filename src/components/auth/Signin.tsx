'use client';

import { ClientSafeProvider, signIn } from 'next-auth/react';
import ColorButton from '@/components/ui/ColorButton';

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

export default function Signin({ providers, callbackUrl }: Props) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <ColorButton
          key={id}
          text={`${name}로 시작하기`}
          onClick={() => signIn(id, { callbackUrl })}
          size="large"
        />
      ))}
    </>
  );
}
