import { tmpdir } from 'os';

export const getTemporalDir = (): string => {
  return tmpdir();
};
