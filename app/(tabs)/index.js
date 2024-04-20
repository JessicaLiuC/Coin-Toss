import { StyleSheet } from 'react-native';
import HouseSvg from '@/assets/dist/House.js';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import SatoshiVariableFont from '@/assets/fonts/Satoshi-Variable.ttf';
import PlanATripButton from '@/components/PlanATripButton';
import CoinTossButton from '@/components/CoinTossButton';

export default function TabOneScreen() {
  const handleClick = () => {
    console.log('Button clicked!');
    alert("The IconButton component has been clicked!!");
  };
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab One</Text> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      <Text style={styles.maintext}>Looks like your calendar is clear!</Text>
      <Text style={styles.secondtext}>Time to plan something fun</Text>
      <PlanATripButton
        text = "Plan a trip"
        background = "#6750A4"
        style = {styles.emptyHome}
        textcolor = "white"
        onClick = {handleClick}
      />
      <CoinTossButton
        text = "Coin Toss"
        fill = "#6750A4"
        background = "white"
        style = {[styles.emptyHome, {borderColor:"#6750A4", top: 20}]}
        textcolor = "#6750A4"
        onClick = {handleClick}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  maintext: {
    color: 'black',
    fontFamily: 'Satoshi-Variable',
    fontSize: 22,
    fontWeight: 'bold',
  },
  secondtext: {
    top: 10,
    color: 'grey',
    fontFamily: 'Satoshi-Variable',
    fontSize: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  emptyHome: {
    padding: 10,
    top: 30,
    justifyContent: 'space-around',
    left: -10,
    alignItems: 'center',
    borderColor: 'transparent',
  }
});
