import {View, Text, TouchableOpacity, Linking} from 'react-native';
import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
// import Geolocation from 'react-native-geolocation-service';

const App = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  const getLocation = () => {
    Geolocation.requestAuthorization();

    Geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      error => setError(error.message),
    );
  };

  const openMaps = () => {
    if ((latitude, longitude)) {
      const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
      Linking.openURL(url);
    } else {
      console.log('Location not available');
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => getLocation()}
        style={{
          marginVertical: 50,
          width: 100,
          height: 50,
          backgroundColor: 'green',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
        }}>
        <Text>Get Location</Text>
      </TouchableOpacity>
      {error && <Text>Error: {error}</Text>}
      {latitude && longitude && (
        <Text>
          Latitude: {latitude}, Longitude: {longitude}
        </Text>
      )}

      <TouchableOpacity
        onPress={() => openMaps()}
        style={{
          marginVertical: 50,
          width: 100,
          height: 50,
          backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
        }}>
        <Text>Get Map</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

// import React, {useState, useEffect} from 'react';
// import {View, Text, Button} from 'react-native';
// import Geolocation from '@react-native-community/geolocation';

// const App = () => {
//   const [latitude, setLatitude] = useState(null);
//   const [longitude, setLongitude] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Request location permission
//     Geolocation.requestAuthorization();

//     // Get current position
//     Geolocation.getCurrentPosition(
//       position => {
//         setLatitude(position.coords.latitude);
//         setLongitude(position.coords.longitude);
//       },
//       error => setError(error.message),
//     );
//   }, []);

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       {error && <Text>Error: {error}</Text>}
//       {latitude && longitude && (
//         <Text>
//           Latitude: {latitude}, Longitude: {longitude}
//         </Text>
//       )}
//     </View>
//   );
// };

// export default App;
