import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const EnrollmentConfirmation = ({ route }) => {
  const {
    firstName,
    lastName,
    dob,
    college,
    email,
    mobile,
  } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thanks for Enrolling {firstName}!  <AntDesign name="checkcircle" size={27} color="white" /></Text>
      <Text style={styles.details}>We will be sharing you the course details at : {email}   </Text>
 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "orange"
  },
  details: {
    fontSize: 15,
    marginBottom: 10,
    color:"white"

  },
});

export default EnrollmentConfirmation;
