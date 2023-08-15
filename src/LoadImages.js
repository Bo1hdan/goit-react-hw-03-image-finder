// import axios from 'axios';

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '37600791-d09d47700ee4db7cdd78bc1fd';

// export const LoadImages = async (searchWord, page) => {
//   try {
//     const response = await axios.get(
//       `${BASE_URL}?q=${searchWord}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//     );
//     const images = response.data;
//     return images;
//   } catch (error) {
//     console.log(error);
//     throw new Error('There is no such image');
//   }
// };

// export default {
//   LoadImages,
// };

// import axios from 'axios';
// const API_KEY = '37600791-d09d47700ee4db7cdd78bc1fd';

// export const fetchImagesWithQuery = async searchQuery => {
//   const response = await axios.get(
//     `/search?query=${searchQuery}&key=${API_KEY}`
//   );
//   return response.data.hits;
// };

// export default {
//   fetchImagesWithQuery,
// };

// import axios from 'axios';
// const API_KEY = '37600791-d09d47700ee4db7cdd78bc1fd';

// export const fetchImagesWithQuery = async searchQuery => {
//   const response = await axios.get(
//     `/search?query=${searchQuery}&key=${API_KEY}&page=${page}&per_page=${12}`
//   );
//   return response.data.hits;
// };

// ${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '37600791-d09d47700ee4db7cdd78bc1fd';

// export const searchImages = (searchWord, page) => {
//   return fetch(
//     `${BASE_URL}?q=${searchWord}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   );
// };

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '37600791-d09d47700ee4db7cdd78bc1fd';

export const searchImages = async (searchWord, page) => {
  const response = await fetch(
    `${BASE_URL}?q=${searchWord}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  if (!response.ok) {
    throw new Error(`Error fetching images: ${response.statusText}`);
  }

  const data = await response.json();
  return data.hits;
};
