import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../Theme/Colors';
import {filterByAlbum} from '../Service/MovieDataService';

const CategoryContainer = () => {
  //   const [data, setData] = useState([]);
  const [latestData, setLatestDate] = useState([]);
  const [movieData, setMovieData] = useState([]);
  const [seriesData, setSeriesData] = useState([]);

  const movieCategoryData = [
    {title: 'Latest', data: latestData},
    {title: 'Movies', data: movieData},
    {title: 'Series', data: seriesData},
  ];

  const isDataExisted =
    movieCategoryData[0]?.data?.length > 0 &&
    movieCategoryData[1]?.data?.length > 0 &&
    movieCategoryData[2]?.data?.length > 0;

  useEffect(() => {
    async function fetchData() {
      const latest = await filterByAlbum(1);
      const movies = await filterByAlbum(2);
      const series = await filterByAlbum(3);

      setLatestDate([...latest]);
      setMovieData([...movies]);
      setSeriesData([...series]);
    }
    fetchData();
  }, []);

  const renderCategoryItem = ({item}) => {
    return (
      <View style={styles.videoContainer}>
        <Image
          resizeMode="cover"
          style={styles.poster}
          source={{uri: item.thumbnailUrl}}
        />
        <Text numberOfLines={1} style={styles.videoTitle}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.categoryContainer}>
      <ScrollView
        contentContainerStyle={styles.innerContainer}
        showsVerticalScrollIndicator={false}>
        {isDataExisted ? (
          movieCategoryData.map((movieCategory, i) => {
            return (
              <View key={i}>
                <Text style={styles.categoryTitle}>{movieCategory.title}</Text>
                <FlatList
                  style={styles.videosRowContainer}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={movieCategory.data}
                  keyExtractor={(_, index) => index}
                  renderItem={renderCategoryItem}
                />
              </View>
            );
          })
        ) : (
          <Text>Data is empty</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default CategoryContainer;

const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    width: '100%',
    marginTop: 20,
    padding: 10,
  },
  innerContainer: {
    paddingBottom: 100,
  },
  categoryTitle: {
    fontSize: 18,
    color: Colors.backgroundColor,
  },
  videosRowContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  videoContainer: {
    elevation: 5,
    backgroundColor: Colors.white,
    width: 120,
    alignItems: 'center',
    marginRight: 10,
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
  },
  poster: {
    width: 110,
    height: 150,
    borderRadius: 5,
  },
  videoTitle: {
    textAlign: 'center',
    paddingVertical: 10,
    color: Colors.backgroundColor,
    fontWeight: 'bold',
    fontSize: 12,
  },
});
