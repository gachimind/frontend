import { CATS, CatTheme, ROCKETS, RocketTheme } from '@constants/characters';

type CatRocket = {
  cat: CatTheme;
  rocket: RocketTheme;
};

export const getCatInfoByQuery = (query: string | undefined) => {
  try {
    const [cat, rocket] = query?.split('-') as [CatTheme, RocketTheme];
    if (!CATS.includes(cat) || !ROCKETS.includes(rocket)) {
      return { cat: 'white', rocket: 'red' } as CatRocket;
    }
    return { cat, rocket } as CatRocket;
  } catch (e) {
    return { cat: 'white', rocket: 'red' } as CatRocket;
  }
};
