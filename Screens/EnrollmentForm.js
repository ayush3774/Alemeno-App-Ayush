import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';

const EnrollmentForm = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState(''); // Store DOB as a string
  const [college, setCollege] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [isPasswordMismatch, setPasswordMismatch] = useState(false);
  const [isMissingDetails, setMissingDetails] = useState(false);

  const handleEnroll = () => {
    if (
      firstName === '' ||
      lastName === '' ||
      dob === '' ||
      college === '' ||
      email === '' ||
      mobile === '' ||
      password === '' ||
      retypePassword === ''
    ) {
      setMissingDetails(true);
    } else if (password === retypePassword) {
      navigation.navigate('Confirmation', {
        firstName,
        lastName,
        dob,
        college,
        email,
        mobile,
        password,
      });
    } else {
      setPasswordMismatch(true);
    }
  };

  // Function to format DOB as "dd/mm/yyyy" while typing
  const formatDOB = (text) => {
    // Only allow numeric characters and a maximum length of 10 (dd/mm/yyyy)
    const formattedText = text.replace(/\D/g, '').slice(0, 8);
    const day = formattedText.slice(0, 2);
    const month = formattedText.slice(2, 4);
    const year = formattedText.slice(4, 8);

    // Combine the formatted parts with slashes
    const formattedDOB = `${day}${day.length === 2 && month ? '/' : ''}${month}${year ? '/' : ''}${year}`;

    setDob(formattedDOB);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth (dd/mm/yyyy)"
        value={dob}
        onChangeText={formatDOB}
        keyboardType="numeric"
        maxLength={10} // Limit the length to "dd/mm/yyyy"
      />
      <TextInput
        style={styles.input}
        placeholder="College"
        value={college}
        onChangeText={(text) => setCollege(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile"
        value={mobile}
        onChangeText={(text) => setMobile(text)}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Retype the Password"
        secureTextEntry
        value={retypePassword}
        onChangeText={(text) => setRetypePassword(text)}
      />

      {isMissingDetails && (
        <Text style={styles.warningText}>Every detail must be filled in order to proceed.</Text>
      )}

      {isPasswordMismatch && (
        <Text style={styles.warningText}>Your password must be the same.</Text>
      )}

      <Pressable style={styles.enrollButton} onPress={handleEnroll}>
        <Text style={styles.enrollButtonText}>Sign Up</Text>
      </Pressable>

      <Pressable
        style={styles.loginButton}
        onPress={() => {
          navigation.navigate("login")
        }}
      >
     <Text style={styles.loginButtonText}> Already have an account? <Text style={styles.loginButtonTexti}>Log In</Text> </Text> 
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    top: 0,
    backgroundColor: "#171717",
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#171717',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
    top: -100,
  },
  warningText: {
    fontSize: 18,
    color: 'red',
    marginBottom: 16,
    top: -100,
  },
  enrollButton: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    top: -100,
  },
  loginButton: {
    backgroundColor: '#171717',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    top: -100,
  },
  enrollButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  loginButtonTexti: {
    color: 'orange',
    fontSize: 20,
    textAlign: 'center',
    
  },
});

export default EnrollmentForm;
