/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList} from 'react-native';

import {CityItem, SearchBar} from '../components';

let originalList = [];

const CityList = (props) => {
  const [cityList, setCityList] = useState([]);

  //ASYNC-AWAIT
  const fetchCityData = async () => {
    const {data} = await axios.get(
      ' http://opentable.herokuapp.com/api/cities',
    );
    setCityList(data.cities);
    originalList = [...data.cities];
  };

  useEffect(() => {
    fetchCityData();
  }, []);

  const renderCities = ({item}) => {<CityItem cityName={item} />;

  const renderSeperator = () => (
    <View style={{borderWidth: 1, borderColor: '#e0e0e0'}} />
  );

  function searchCity(search) {
    const filteredCities = originalList.filter((city) => {
      const text = search.toUpperCase();
      const cityName = city.toUpperCase();

      return cityName.indexOf(text) > -1;
    });
    setCityList(filteredCities);
  }

  return (
    <View>
      <SearchBar
        placeholder="Bir şehir arayın..."
        onSearch={(value) => searchCity(value)}
      />

      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={cityList}
        renderItem={renderCities}
        ItemSeparatorComponent={renderSeperator}
      />
    </View>
  );
};

export {CityList};
