import axios from 'axios';
import { isUndefined, omitBy } from 'lodash';
import { from } from 'rxjs';

const OMDB_API = 'https://www.omdbapi.com/'; // process.env.OMDB_API
const OMDB_API_KEY = 'a3262d1c'; // process.env.OMDB_API_KEY;

export const httpClient = () => ({
  get: <T, P extends Record<string, string | number | undefined> = {}>(params?: P) =>
    from(
      axios.get<T>(OMDB_API, {
        params: {
          apikey: OMDB_API_KEY,
          ...omitBy(params, isUndefined),
        },
      })
    ),
});

export const logger = (val: any) => {
  // eslint-disable-next-line no-console
  console.log(val);
  return val;
};
