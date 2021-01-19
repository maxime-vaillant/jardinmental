import React from 'react';
import {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../common/colors';
import localStorage from '../utils/localStorage';

const ReminderItem = ({onPress}) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    (async () => {
      const supported = await localStorage.getSupported();
      if (supported === 'YES') {
        return setMessage(
          'Saisir au moins 4 ou 5 fois par semaine aidera le professionnel qui vous suit à mieux vous soigner',
        );
      } else {
        return setMessage(
          'Saisir au moins 3 à 4 fois par semaine vos symptômes est l’idéal pour les suivres.',
        );
      }
    })();
  }, []);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>Mettre un rappel</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(31, 198, 213, 0.2)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F4FCFD',
    marginBottom: 20,
    padding: 15,
  },
  title: {
    fontWeight: 'bold',
    color: colors.BLUE,
  },
  message: {
    marginVertical: 10,
    color: colors.BLUE,
  },
  buttonWrapper: {
    paddingTop: 10,
  },
});

export default ReminderItem;
