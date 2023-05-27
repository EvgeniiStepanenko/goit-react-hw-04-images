// const API_KEY = '35257003-3888449e228f8cae772a00d8b';
// const BASE_URL = 'https://pixabay.com/api/';
// const PICS_ON_PAGE = 12;

// export const getSearch = (searchText, page) => {
//   const params = new URLSearchParams({
//     q: searchText,
//     page: page,
//     key: API_KEY,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     per_page: PICS_ON_PAGE,
//   });

//   return fetch(`${BASE_URL}?${params}`);
// };

import axios from 'axios';

export const fetchImages = async (query, page) => {
  const response = await axios.get(`https://pixabay.com/api/`, {
    method: 'get',
    params: {
      key: '35257003-3888449e228f8cae772a00d8b',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page: page,
    },
  });

  return response.data;
};
