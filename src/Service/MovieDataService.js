import {API} from '../Config/config';

export const getData = async () => {
  return fetch(API)
    .then(response => response.json())
    .then(data => data);
};

export const filterByAlbum = async albumId => {
  const result = await getData();
  const reversedData = result.filter(item => item.albumId === albumId);
  const latestData = reversedData.reverse();
  const firstTenData = latestData.slice(0, 10);
  return firstTenData;
};
