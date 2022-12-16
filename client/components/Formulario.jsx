import React, { useState } from "react";
import {
  Text,
  Modal,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
const { stylesFormulario } = require("../styles");

export const Formulario = (props) => {
  // --------------------------------------------------------------------
  const { modalVisible, setModalVisible, setPacientes, pacientes } = props;

  // --------------------------------------------------------------------
  const [paciente, setPaciente] = useState({
    duenio: "",
    mascota: "",
    email: "",
    telefono: "",
    sintomas: "",
  });

  // --------------------------------------------------------------------
  const handleCita = () => {
    if (
      [
        paciente.duenio,
        paciente.mascota,
        paciente.telefono,
        paciente.sintomas,
      ].includes("")
    ) {
      Alert.alert(
        "No se pudo crear la cita",
        "Todos los campos son obligatorios"
      );
      return;
    }
    setPacientes([...pacientes, paciente]);
    setPaciente({
      duenio: "",
      mascota: "",
      email: "",
      telefono: "",
      sintomas: "",
    });
    setModalVisible(false);
  };

  // --------------------------------------------------------------------
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={stylesFormulario.conteinerFormulario}>
        <ScrollView>
          <View>
            <Text style={stylesFormulario.titulo}>
              Nueva
              <Text style={stylesFormulario.tituloBold}> Cita</Text>
            </Text>
            <Pressable
              style={stylesFormulario.btnCancelar}
              onPress={(e) => setModalVisible(false)}
            >
              <Text style={stylesFormulario.btnCancelarTexto}>Cancelar</Text>
            </Pressable>
          </View>
          <View>
            <View style={stylesFormulario.campo}>
              <Text style={stylesFormulario.label}>Nombre Dueño</Text>
              <TextInput
                keyboardType="default"
                placeholder="Nombre Dueño"
                style={stylesFormulario.input}
                value={paciente.duenio}
                onChangeText={(e) => {
                  setPaciente((paciente) => ({
                    ...paciente,
                    duenio: e,
                  }));
                }}
              />
            </View>
            <View style={stylesFormulario.campo}>
              <Text style={stylesFormulario.label}>Nombre Mascota</Text>
              <TextInput
                keyboardType="default"
                placeholder="Nombre Mascota"
                style={stylesFormulario.input}
                value={paciente.mascota}
                onChangeText={(e) => {
                  setPaciente((paciente) => ({
                    ...paciente,
                    mascota: e,
                  }));
                }}
              />
            </View>
            <View style={stylesFormulario.campo}>
              <Text style={stylesFormulario.label}>
                Email Dueño (No Obligatorio)
              </Text>
              <TextInput
                keyboardType="email-address"
                placeholder="Email Dueño"
                style={stylesFormulario.input}
                value={paciente.email}
                onChangeText={(e) => {
                  setPaciente((paciente) => ({
                    ...paciente,
                    email: e,
                  }));
                }}
              />
            </View>
            <View style={stylesFormulario.campo}>
              <Text style={stylesFormulario.label}>Teléfono Dueño</Text>
              <TextInput
                keyboardType="number-pad"
                placeholder="Teléfono Dueño"
                style={stylesFormulario.input}
                maxLength={10}
                value={paciente.telefono}
                onChangeText={(e) => {
                  setPaciente((paciente) => ({
                    ...paciente,
                    telefono: e,
                  }));
                }}
              />
            </View>
            <View style={stylesFormulario.campo}>
              <Text style={stylesFormulario.label}>Síntonas Mascota</Text>
              <TextInput
                keyboardType="default"
                placeholder="Síntonas Mascota"
                style={stylesFormulario.input}
                multiline={true}
                value={paciente.sintomas}
                onChangeText={(e) => {
                  setPaciente((paciente) => ({
                    ...paciente,
                    sintomas: e,
                  }));
                }}
              />
            </View>
            <Pressable
              style={stylesFormulario.btnNuevaCita}
              onPress={(e) => handleCita()}
            >
              <Text style={stylesFormulario.btnNuevaCitaTexto}>
                Agregar Cita
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};
