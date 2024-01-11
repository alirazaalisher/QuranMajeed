import { IJuz } from './juz.model';
import { IAyah } from './ayah.model';
export interface ISurah {
  id: number;
  number: number;
  name: string;
  transliteration: string;
  translation: string;
  numberOfAyahs: number;
  revelationType: string;
  ayahs: IAyah[];
  juz: IJuz[];
}
