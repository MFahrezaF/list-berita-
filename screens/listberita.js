import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";


const windowWidth = Dimensions.get("window").width;

class Berita extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,  
    };
  }

  async getberita() {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/dauditts/pm-static-api/main/articles.json"
      );
      const json = await response.json();
      this.setState({ data: json.articles });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getberita();
  }

  renderItem = ({ item }) => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() =>
          navigation.navigate("Detailberita", { data: item })
        }
      >
        <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
          <Image source={{ uri: item.image }} style={styles.itemImage} />
          <Text style={styles.itemText}>
            {item.title}, {item.date}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const { data, isLoading } = this.state; //destructuring assignment
    return (
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#AA0002" />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={this.renderItem}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#818FB4',
    padding: 10,
    borderRadius: 8,
  },
  itemBorder: {
    borderWidth: 0.5,
    borderColor: "#cccccc",
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  itemText: {
    fontSize: 20,
    width: windowWidth - 150,
    marginLeft: 15,
    color : 'white'
   

  },
});

export default Berita;
