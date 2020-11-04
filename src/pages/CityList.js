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

  function searchCity(search) {}

  return (
    <View>
      <Text style={{fontSize: 35, fontWeight: 'bold', textAlign: 'center'}}>
        CityList
      </Text>
      <SearchBar
        placeholder="Bir sehir arayin"
        onSearch={(value) => console.log(value)}
      />
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={cityList}
        renderItem={renderCities}
        ItemSeparatorComponent={() => (
          <View style={{borderColor: '#d0d0d0', borderWidth: 1}} />
        )}
      />
    </View>
  );
};

export {CityList};
