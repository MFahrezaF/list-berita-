import React, { Component } from "react";
import { Text, View, StyleSheet, Image, Dimensions, Linking, FlatList, TouchableOpacity } from "react-native";
import Separator from "../components/separator";

const windowWidth = Dimensions.get("window").width;

class Detailberita extends Component {
  render() {
    const { route } = this.props;
    const data = route.params.data;

    // data yang akan ditampilkan dalam FlatList
    const additionalData = [
      { id: 1, text: "" },
      
    ];

    return (
      <FlatList
        data={additionalData} // data yg berada dalam flatlist
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image source={{ uri: data.image }} style={styles.image} />
            <Separator height={10} />
            <View style={{ padding: 10 }}>
              <Text style={styles.title}>{data.title}</Text>
              <Separator height={10} />
              <Text style={styles.text}>{data.content}</Text>
              <Separator height={20} />
              <Text style={styles.title}>{data.date}</Text>
              <Separator height={10} />
            </View>
            <TouchableOpacity
              style={styles.readMoreButton}
              onPress={() => Linking.openURL(data.link).catch((err) => console.error("Error", err))}
            >
              <Text style={styles.readMoreButtonText}>Read More</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  image: {
    width: windowWidth - 30,
    height: 200,
    resizeMode: "stretch",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
  },
  date: {
    fontSize: 16,
  },
  readMoreButton: {
    backgroundColor: "#3498db", 
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 20,
  },
  readMoreButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff", 
  },
});

export default Detailberita;
