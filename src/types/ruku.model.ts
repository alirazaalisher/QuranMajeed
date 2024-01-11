import { ISurah } from './surah.model';
import { IAyah } from './ayah.model';
export interface IRuku {
  number: number;
  numberOfAyahs: number;
  ayahs: IAyah[];
  surahs: ISurah[];
}
