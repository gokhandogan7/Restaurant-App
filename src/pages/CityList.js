/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList} from 'react-native';

import {CityItem, SearchBar} from '../components';

const CityList = (props) => {
  const [cityList, setCityList] = useState([]);
  const fetchCityData = async () => {
    const {data} = await axios.get('http://opentable.herokuapp.com/api/cities');
    setCityList(data.cities);
  };

  useEffect(() => {
    fetchCityData();
  }, []);

  const renderCities = ({item}) => <CityItem cityName={item} />;

  return (
    <View>
      <Text style={{fontSize: 35, fontWeight: 'bold', textAlign: 'center'}}>
        CityList
      </Text>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={cityList}
        renderItem={renderCities}
      />
    </View>
  );
};

export {CityList};
