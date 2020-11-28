import React, { useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";

import firebase from "../database/firebase";

const AddUserScreen = (props) => {
  const initalState = {
    name: "",
    materno: "",
    paterno: "",
    email: "",
    phone: "",
    edad: "",
  };

  const [state, setState] = useState(initalState);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const saveNewUser = async () => {
    if (state.name === "") {
      alert("please provide a name");
    } else {

      try {
        await firebase.db.collection("users").add({
          name: state.name,
          materno: state.materno,
          paterno: state.paterno,
          email: state.email,
          phone: state.phone,
          edad: state.edad,
        });

        props.navigation.navigate("UsersList");
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Name Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Nombre"
          onChangeText={(value) => handleChangeText(value, "name")}
          value={state.name}
        />
      </View>

      {/* Materno Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Apellido Materno"
          onChangeText={(value) => handleChangeText(value, "materno")}
          value={state.materno}
        />
      </View>

      {/* Paterno Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Apellido Paterno"
          onChangeText={(value) => handleChangeText(value, "paterno")}
          value={state.paterno}
        />
      </View>

      {/* Edad Input */}
      <View style={styles.inputGroup}>
        <TextInput
          keyboardType="numeric"
          placeholder="Edad"
          maxLength={2}
          onChangeText={(value) => handleChangeText(value, "edad")}
          value={state.edad}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputGroup}>
        <TextInput
          keyboardType="email-address"
          placeholder="Email"
          multiline={true}
          numberOfLines={1}
          onChangeText={(value) => handleChangeText(value, "email")}
          value={state.email}
        />
      </View>

      {/* Input */}
      <View style={styles.inputGroup}>
        <TextInput
          keyboardType="phone-pad"
          maxLength={10}
          placeholder="Telefono"
          onChangeText={(value) => handleChangeText(value, "phone")}
          value={state.phone}
        />
      </View>

      <View style={styles.button}>
        <Button title="Save User" onPress={() => saveNewUser()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddUserScreen;
