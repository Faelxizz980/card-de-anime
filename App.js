import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CardAnime from './components/cardAnime';
import personagens from './data/personagens.json';
import { ScrollView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style ={styles.title}>Personagens</Text> 
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.row}>
          {personagens.map((personagem) => (
            <CardAnime
              key={personagem.id}
              nome={personagem.nome}
              anime={personagem.anime}
              imagem={personagem.imagem}
            />
          ))} 
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1536',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    marginTop: 50,
  },
});
