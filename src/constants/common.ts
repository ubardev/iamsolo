export enum OTT_LIST {
  netflix = 'netflix',
  coupangplay = 'coupangplay',
  tving = 'tving',
}

export const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://iamsolo.vercel.app';
