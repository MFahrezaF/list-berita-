import React, { Component } from "react";
import {
  Image,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";
import Separator from "../components/separator";
import IconBerita from "../components/IconBerita";

class Home extends Component {
  state = {
    isProfileModalVisible: false,
  };

  toggleProfileModal = () => {
    this.setState((prevState) => ({
      isProfileModalVisible: !prevState.isProfileModalVisible,
    }));
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Image
            source={require("../assets/logo_informatika.png")}
            style={styles.logo}
          />
          <Separator height={15} />
        </View>

        <TouchableOpacity onPress={this.toggleProfileModal}>
          <View>
            <Image
              source={require("../assets/fotosaya1.jpg")}
              style={styles.profil}
            />
            <Separator height={15} />
          </View>
        </TouchableOpacity>

        <View>
          <Text style={styles.text}>
            Saya anak informatika ITTS Surabaya, ini adalah tugas UTS saya
            pemrograman mobile menggunakan React Native.
          </Text>
          <Separator height={15} />

          <Text style={styles.text}>
            Nama : M Fahreza Fahreza{"\n"} 
            Nim  : 1203210057{"\n"} 
            Prodi : Informatika '21
          </Text>
          <Separator height={15} />
        </View>

        <IconBerita onPress={() => this.props.navigation.navigate("Berita")} />

        {/* Profil Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.isProfileModalVisible}
          onRequestClose={this.toggleProfileModal}
        >
          <View style={styles.modalContainer}>
            <Image
              source={require("../assets/fotosaya1.jpg")}
              style={styles.modalProfile}
            />
            <TouchableOpacity
              onPress={this.toggleProfileModal}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "white",
  },
  logo: {
    width: 250,
    height: 150,
    resizeMode: "contain",
    alignSelf: "center",
    borderRadius: 50,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  profil: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    alignSelf: "center",
    borderRadius: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalProfile: {
    width: 350,
    height: 350,
    resizeMode: "contain",
    borderRadius: 10,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#cccccc",
    borderRadius: 10,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Home;
