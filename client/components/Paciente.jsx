import React from "react";
import { Text, View, Pressable, Alert } from "react-native";
const { stylesPaciente } = require("../styles");

export const Paciente = (props) => {
  // --------------------------------------------------------------------
  const { paciente, pacientes, setPacientes } = props;

  // --------------------------------------------------------------------
  const eliminarPaciente = (mascota) => {
    Alert.alert(
      "¿Deseas eliminar este paciente?",
      "Un paciente eliminado no se puede recuperar",
      [
        {
          text: "Cancelar",
        },
        {
          text: "Si, Eliminar",
          onPress: () => {
            realizarEliminacion(mascota);
          },
        },
      ]
    );
  };

  // --------------------------------------------------------------------
  const realizarEliminacion = (mascota) => {
    const pacientesActualizados = pacientes.filter(
      (pacientesState) => pacientesState.mascota !== mascota
    );
    setPacientes(pacientesActualizados);
  };

  // --------------------------------------------------------------------
  return (
    <View style={stylesPaciente.container}>
      <View>
        <Text style={stylesPaciente.label}>Paciente:</Text>
        <Text style={stylesPaciente.texto}>{paciente.mascota}</Text>
        <Text style={stylesPaciente.fecha}>{paciente.sintomas}</Text>
      </View>
      <View style={stylesPaciente.containerBotones}>
        <Pressable
          style={[stylesPaciente.btn, stylesPaciente.btnEliminar]}
          onLongPress={(e) => eliminarPaciente(paciente.mascota)}
        >
          <Text style={stylesPaciente.btnTexto}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
  );
};
