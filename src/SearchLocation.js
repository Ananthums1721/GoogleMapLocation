import React from 'react';
import {View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const SearchLocation = () => {
  return (
    <View style={{flex: 1}}>
      {/* <View style={{width: '100%', padding: 20}}> */}
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
          },

          description: {
            color: 'black',
          },
        }}
        onPress={(data, details = null) => {
          console.log(details, '---------');
          console.log(data, '================');
        }}
        query={{
          key: 'AIzaSyA6sfxAGWorlekK-rkolU152WkN5mzn76A',
          language: 'en',
        }}
      />
      {/* </View> */}
    </View>
  );
};

export default SearchLocation;
