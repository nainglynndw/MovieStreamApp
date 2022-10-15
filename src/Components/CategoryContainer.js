import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../Theme/Colors';
import {filterByAlbum} from '../Service/MovieDataService';

const CategoryContainer = () => {
  //   const [data, setData] = useState([]);
  const [latestData, setLatestDate] = useState([]);
  const [movieData, setMovieData] = useState([]);
  const [seriesData, setSeriesData] = useState([]);
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
      <ScrollView contentContainerStyle={styles.innerContainer}>
        <Text style={styles.categoryTitle}>Latest</Text>
        <FlatList
          style={styles.videosRowContainer}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={latestData}
          keyExtractor={(_, index) => index}
          renderItem={renderCategoryItem}
        />
        <Text style={styles.categoryTitle}>Movies</Text>
        <FlatList
          style={styles.videosRowContainer}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={movieData}
          keyExtractor={(_, index) => index}
          renderItem={renderCategoryItem}
        />
        <Text style={styles.categoryTitle}>Series</Text>
        <FlatList
          style={styles.videosRowContainer}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={seriesData}
          keyExtractor={(_, index) => index}
          renderItem={renderCategoryItem}
        />
      </ScrollView>
    </View>
  );
};

export default CategoryContainer;

const styles = StyleSheet.create({
  categoryContainer: {
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
