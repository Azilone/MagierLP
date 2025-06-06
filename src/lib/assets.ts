import assetsData from '../../assets.json';

export const assets = assetsData as const;
export type Assets = typeof assets;
