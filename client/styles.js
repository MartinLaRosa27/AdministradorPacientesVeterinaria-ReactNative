import { StyleSheet, Platform } from "react-native";

module.exports.styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  titulo: {
    textAlign: "center",
    textTransform: "capitalize",
    fontSize: 30,
    color: "#374151",
    fontWeight: "600",
    paddingTop: 50,
  },
  tituloBold: {
    fontWeight: "900",
    color: "#6D28D9",
  },
  btnNuevaCita: {
    backgroundColor: "#6D28D9",
    padding: 20,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    marginBottom: 25,
  },
  btnTextoNuevaCita: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 20,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  noPacientes: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
  },
});

module.exports.stylesFormulario = StyleSheet.create({
  conteinerFormulario: {
    backgroundColor: "#6D28D9",
    flex: 1,
  },
  titulo: {
    textAlign: "center",
    textTransform: "capitalize",
    fontSize: 30,
    color: "#FFF",
    fontWeight: "600",
    paddingTop: 20,
  },
  tituloBold: {
    fontWeight: "900",
    color: "#FFF",
  },
  input: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
  },
  label: {
    color: "#FFF",
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: "600",
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  fecha: {
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
  btnCancelar: {
    backgroundColor: "#5827A4",
    marginHorizontal: 30,
    padding: 15,
    marginVertical: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFF",
  },
  btnCancelarTexto: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 16,
    textTransform: "uppercase",
  },
  btnNuevaCita: {
    backgroundColor: "#519463",
    marginHorizontal: 30,
    padding: 15,
    marginVertical: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFF",
  },
  btnNuevaCitaTexto: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 16,
    textTransform: "uppercase",
  },
});

module.exports.stylesPaciente = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 20,
    borderBottomColor: "#94a3B8",
    borderBottomWidth: 1,
  },
  label: {
    color: "#374151",
    textTransform: "uppercase",
    fontWeight: "700",
    marginBottom: 10,
  },
  texto: {
    color: "#6D28D9",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
  },
  fecha: {
    color: "#374151",
  },
  containerBotones:{
flexDirection:"row",
justifyContent:"space-between",
marginTop:20
  },
  btn:{
    paddingVertical:5,
    paddingHorizontal:20,
    borderRadius:5
  },
  btnEditar:{
    backgroundColor:"#c77d22"
  },
  btnEliminar:{
    backgroundColor:"#c72222"
  },
  btnTexto:{
    color:"#FFF",
    textTransform:"uppercase",
    fontWeight:"700",
    fontSize:12,
    color:"#FFF"
  }
});
