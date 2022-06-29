const API_KEY = 'api_key=AbRivaimagWGLedWpuIBbVuOKrRUxxejodfFWuAq';

const BASE_ROUTE = 'https://api.nasa.gov';
const PLANETARY = 'planetary';
const APOD = 'apod';
const COUNT = 'count=1';
const DATE = 'date';

export const ROUTES_API = {
  APOD: {
    IMAGES: {
      RANDOM: `${BASE_ROUTE}/${PLANETARY}/${APOD}?${API_KEY}&${COUNT}`,
      SELECTED_DATE: `${BASE_ROUTE}/${PLANETARY}/${APOD}?${API_KEY}&${DATE}={selectedDate}`,
    },
  },
};
