import { mapData } from './map-data';
import config from '../config';

export const loadPages = async (slug = '') => {
  const cleanSlug = slug ? `?slug=${slug.replace(/[^a-z0-9-_]/gi, '')}` : '';
  const url = `${config.url}/pages/${cleanSlug}`;

  const raw = await fetch(url);
  const json = await raw.json();
  const data = mapData(json);

  return data;
};
