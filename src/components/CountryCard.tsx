import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

type CountryCardProps = PropsWithChildren<{
  image: ImageSourcePropType;
  countryName: string;
  setCurrency: (value: React.SetStateAction<number>) => void;
}>;

export default function CountryCard({
  image,
  countryName,
  setCurrency,
}: CountryCardProps) {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: '100%',
          height: '80%',
          // aspectRatio: 1 / 1,
          // borderRadius: '50%',
          // objectFit: 'cover',
        }}
        source={image}
        alt="country flag"
      />
      <Text style={{color: 'black', fontWeight: 'bold'}} numberOfLines={1}>
        {countryName}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    alignItems: 'center',
    shadowOffset: {width: 10, height: 10},
    elevation: 1,
    shadowOpacity: 0,
    width: 102,
    height: 125,
    // padding: 10,
    // borderWidth: 1,
    borderColor: 'gray',
    // borderRadius: 40,
  },
});
