import React, { useState } from "react";
import { Text, View, Pressable, SafeAreaView, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Formulario } from "./components/Formulario";
import { Paciente } from "./components/Paciente";
const { styles } = require("./styles");

export default function App() {
  // --------------------------------------------------------------------
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);

  // --------------------------------------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView>
        <View>
          <Text style={styles.titulo}>
            Administrador de Citas
            <Text style={styles.tituloBold}> Veterinaria</Text>
          </Text>
          <Pressable
            onPress={(e) => setModalVisible(true)}
            style={styles.btnNuevaCita}
          >
            <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
          </Pressable>
          {pacientes.length === 0 ? (
            <Text style={styles.noPacientes}>
              No se encuntran pacientes registrados
            </Text>
          ) : (
            <ScrollView>
              {pacientes.map((paciente) => {
                return (
                  <Paciente
                    paciente={paciente}
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                    key={paciente.mascota}
                  />
                );
              })}
            </ScrollView>
          )}
          <Formulario
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            pacientes={pacientes}
            setPacientes={setPacientes}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
