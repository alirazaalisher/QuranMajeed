import { ISurah } from './surah.model';
import { IRuku } from './ruku.model';

export interface IAyah {
  id: number;
  number: number;
  text: string;
  juz: number;
  ruku: IRuku;
  sajda: boolean;
  audio: [];
  surah: ISurah;
  translations: {
    ur: string;
  };
}
