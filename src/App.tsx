/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {data} from './Constants';

import Snackbar from 'react-native-snackbar';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
type Country = {
  name: string;
  image: ImageSourcePropType;
  rupeesPerUnit: number;
  currencySign: string;
};

function App(): React.JSX.Element {
  const [targetCountry, setTargetCountry] = useState<Country>();
  const [switched, setSwitched] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const ConvertInRupee = (targetValue: Country) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Please provide some value',
        backgroundColor: 'red',
        textColor: '#ddd',
      });
    }
    const value = parseFloat(inputValue);
    if (!isNaN(value)) {
      const rupees = targetValue?.rupeesPerUnit * value;
      setResult(rupees.toFixed(2));
      setTargetCountry(targetValue);
    } else {
      Snackbar.show({
        text: 'Some-thing happend',
        backgroundColor: '#000',
        textColor: '#fff',
      });
    }
  };

  const switchConversion = () => {
    console.log('switched', switched);
    setResult('');
    setInputValue('');
    setSwitched(!switched);
  };

  const convertFromRupee = (targetValue: Country) => {
    setResult('');
    if (!inputValue) {
      return Snackbar.show({
        text: 'Please provide some value',
        backgroundColor: 'red',
        textColor: '#fff',
      });
    }
    const value = parseFloat(inputValue);
    if (!isNaN(value)) {
      const convertedValue = value / targetValue.rupeesPerUnit;
      const finalValue = convertedValue.toFixed(2);
      setResult(`${targetValue.currencySign} ${finalValue}`);
      setTargetCountry(targetValue);
    } else {
      Snackbar.show({
        text: 'Some-thing happend',
        backgroundColor: '#000',
        textColor: '#fff',
      });
    }
  };

  return (
    <SafeAreaView>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        locations={[0, 0.67, 1]}
        colors={['#f19a9a', '#ff6b69', '#ff6b69']}
        style={{height: 50}}>
        <StatusBar
          // backgroundColor={'rgba(255,107,105,1)'}
          translucent={true}
          backgroundColor={'transparent'}
          barStyle="dark-content"
        />
      </LinearGradient>
      <View style={styles.container}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          locations={[0, 0.67, 1]}
          colors={['#f19a9a', '#ff6b69', '#ff6b69']}
          style={[styles.innerContainer, styles.innerContainerUp]}>
          <View style={styles.heatingConainer}>
            <Text style={styles.headingText}>Currency</Text>
          </View>
          <View style={styles.inputContianer}>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.textInput}
                placeholder="Amount"
                inputMode="numeric"
                value={inputValue}
                onChangeText={newText => setInputValue(newText)}
              />
            </View>
            {switched ? (
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
                INR
              </Text>
            ) : (
              <View style={styles.listConainer}>
                <FlatList
                  data={data.countryData}
                  renderItem={({item}) => (
                    <Pressable
                      style={{
                        borderWidth: targetCountry?.name === item.name ? 1 : 0,
                        borderColor: '#fff',
                        padding: 10,
                      }}
                      onPress={() => ConvertInRupee(item)}>
                      <Text style={styles.listText} numberOfLines={1}>
                        {item.name}
                      </Text>
                      <Image
                        source={item.image}
                        style={{height: 40, aspectRatio: 1 / 1}}
                      />
                    </Pressable>
                  )}
                />
              </View>
            )}
          </View>
        </LinearGradient>
        <Pressable
          style={styles.exchangeButton}
          onPress={() => switchConversion()}>
          <Icon
            name="sync-alt"
            style={{fontSize: 30, fontWeight: 'bold', color: '#ff6b69'}}
          />
        </Pressable>
        <View style={[styles.innerContainer, styles.innerContainerDown]}>
          <View style={styles.resultContainer}>
            <View style={styles.inputBoxDown}>
              <TextInput
                style={styles.textInputDown}
                placeholder={switched ? 'Dollar' : 'INR'}
                inputMode="numeric"
                defaultValue="00.00"
                value={result}
              />
            </View>
            <View
              style={[
                styles.listConainer,
                {
                  backgroundColor: switched
                    ? 'rgba(255,107,105,0.45702030812324934)'
                    : 'white',
                  height: switched ? '50%' : '50%',
                  width: switched ? '49%' : '50%',
                },
              ]}>
              {/* <FlatList
                data={data.countryData}
                renderItem={({item}) => (
                  <Pressable>
                    <Text style={styles.listText} numberOfLines={1}>
                      {item.name}
                    </Text>
                  </Pressable>
                )}></FlatList> */}
              {switched ? (
                // <View style={styles.listConainer}>
                <FlatList
                  data={data.countryData}
                  renderItem={({item}) => (
                    <Pressable
                      style={{
                        borderWidth: targetCountry?.name === item.name ? 1 : 0,
                        borderColor: '#fff',
                        padding: 10,
                      }}
                      onPress={() => convertFromRupee(item)}>
                      <Text
                        style={[
                          styles.listText,
                          {color: switched ? 'black' : 'white'},
                        ]}
                        numberOfLines={1}>
                        {item.name}
                      </Text>
                      <Image
                        source={item.image}
                        style={{height: 40, aspectRatio: 1 / 1}}
                      />
                    </Pressable>
                  )}
                />
              ) : (
                // </View>
                <Text style={{fontSize: 20, color: '#ff6b69'}}>INR</Text>
              )}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    // borderWidth: 1,
    borderColor: 'red',
  },
  innerContainer: {
    height: '50%',
    width: '100%',
    // borderWidth: 1,
    borderColor: 'black',
  },
  innerContainerUp: {},
  innerContainerDown: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    // borderWidth: 1,
    borderColor: 'black',
  },
  headingText: {
    fontSize: 27,
    fontFamily: 'Open Sans, sans-serif',
    color: '#fff',
    textAlign: 'center',
  },
  heatingConainer: {
    padding: 40,
    // textAlign: 'center',
    // borderWidth: 1,
    // borderColor: 'black',
  },
  inputContianer: {
    width: '100%',
    // borderWidth: 1,
    borderColor: 'red',
    height: '70%',
    paddingHorizontal: 60,
    display: 'flex',
    flexDirection: 'row',
    columnGap: 30,
    // width: '50%',
    // paddingVertical: 30,
  },
  inputBox: {
    borderColor: 'white',
    height: '100%',
    width: '50%',
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: 'white',
    fontSize: 27,
    color: 'white',
  },
  listConainer: {
    // borderColor: 'white',
    // borderWidth: 1,
    height: '50%',
    width: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    zIndex: 100,
    padding: 10,
    shadowOffset: {width: 5, height: 10},
    shadowOpacity: 0.8,
    shadowColor: 'rgba(255, 255, 255, 0.4)',
    elevation: 5,
  },
  listText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  resultContainer: {
    width: '100%',
    height: '70%',
    // borderWidth: 1,
    paddingHorizontal: 64,
    borderColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    columnGap: 30,
  },
  inputBoxDown: {
    // borderWidth: 2,
    borderColor: '#ff6b69',
    width: '50%',
  },
  textInputDown: {
    borderBottomWidth: 2,
    borderColor: '#ff6b69',
    fontSize: 27,
    color: '#ff6b69',
    // fontStyle: 'italic',
    // fontWeight: 'bold',
  },
  exchangeButton: {
    // borderWidth: 1,s
    borderColor: 'red',
    // width: ,
    padding: 10,
    backgroundColor: 'white',
    position: 'absolute',
    // bottom: 20,
    right: 50,
    bottom: '47%',
    shadowOffset: {width: 5, height: 10},
    shadowOpacity: 0.5,
    shadowColor: 'black',
    elevation: 5,
  },
});

export default App;
