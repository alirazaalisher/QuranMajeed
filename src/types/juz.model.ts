import { ISurah } from './surah.model';
import { IAyah } from './ayah.model';
export interface IJuz {
  number: number;
  name: string;
  numberOfAyahs: number;
  ayahs: IAyah[];
  surahs: ISurah[];
}
