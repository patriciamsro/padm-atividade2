import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar/>

      <View style={styles.header}>
        <View>
          <Text style={styles.titulo}>Lighteria</Text>
        </View>
        <View style={styles.iconeSacola}>
          <Image
            style={styles.imgSacola}
            source={require('./assets/icone-sacola.png')}
          />
        </View>
      </View>

      <View style={{paddingLeft: 35,flexDirection: 'row', alignItems: 'center', justifyContent:"center", width: 370}}>
        <View style={{flex: 3, height: 1, backgroundColor: '#C8C5C2'}} />
        <View>
            <Text style={{width: 85, textAlign: 'center', color: "#C8C5C2"}}>Categorias</Text>
        </View>
        <View style={{flex: 3, height: 1, backgroundColor: '#C8C5C2' }}/>
      </View>

      <View style={styles.linhaProdutos}>
        <View style={styles.card}>
          <Image
            style={styles.img}
            source={require('./assets/01-tablelamps.png')}
          />
          <Text style={styles.textCard}>Abajur</Text>
        </View>
        
        <View style={styles.card}>
          <Image
            style={styles.img}
            source={require('./assets/02-ceilinglamps.png')}
          />
          <Text style={styles.textCard}>Lâmpada de Teto</Text>
        </View>
      </View>

      <View style={styles.linhaProdutos}>
        <View style={styles.card}>
          <Image
            style={styles.img}
            source={require('./assets/03-sconces.png')}
          />
          <Text style={styles.textCard}>Arandela</Text>
        </View>
        
        <View style={styles.card}>
          <Image
            style={styles.img}
            source={require('./assets/04-floorlamps.png')}
          />
          <Text style={styles.textCard}>Luminária de chão</Text>
        </View>
      </View>

      <View style={styles.linhaProdutos}>
        <View style={styles.card}>
          <Image
            style={styles.img}
            source={require('./assets/05-lightdecor.png')}
          />
          <Text style={styles.textCard}>Arandela</Text>
        </View>
        
        <View style={styles.card}>
          <Image
            style={styles.img}
            source={require('./assets/06-garlands.png')}
          />
          <Text style={styles.textCard}>Luminária</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    textAlign: 'left',
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 20,
    height: 1,
    textAlign: 'center'
  },
  subTitulo: {
    fontSize: 15,
    padding: 30,
    height: 1,
    textAlign: 'center',
    color: 'grey'
  },
  iconeSacola: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 50,
    marginLeft: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  imgSacola: {
    width: 40,
    height: 40,
    borderRadius: 20,

  },
  img: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    margin: 'auto'
  },
  linhaProdutos: {
    flex: 1,
    flexDirection: 'row',
    margin: 'auto'
  },
  card: {
    backgroundColor: 'white',
    textAlign: 'center',
    padding: 20,
    margin: 10,
    borderRadius: 15,
    width: 160,
  },
  textCard: {
    color: 'grey',
    paddingTop: 10
  }
});
