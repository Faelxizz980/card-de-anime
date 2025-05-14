import React from 'react';
import { View, Text, Image, StyleSheet, PushNotificationIOS } from 'react-native';

export default function CardAnime({ nome = "Não informado", anime = "Não informado", imagem }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imagem }} style={styles.image} />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.anime}>{anime}</Text>
    </View>
  );   

}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#08204d',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  anime: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#ffecec',
  },
});