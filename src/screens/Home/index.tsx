import { View, Text, TextInput, FlatList } from "react-native";
import { styles } from "./styles";
import { MagnifyingGlass } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { CardMovies } from "../../components/CardMovies";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

export function Home() {
  const [discoveryMovies, setdiscoveryMovies] = useState<Movie[]>([]);
  useEffect(() => {
    loadMoreData();
  }, []);
  const loadMoreData = async () => {
    const response = await api.get("/movie/popular");

    setdiscoveryMovies(response.data.results);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> Oque Você quer assistir hoje?</Text>
      <View style={styles.containerInput}>
        <TextInput
          placeholderTextColor="#FFF"
          style={styles.input}
          placeholder="Buscar"
        ></TextInput>
        <MagnifyingGlass
          color="#FFF"
          size={25}
          weight="light"
        ></MagnifyingGlass>
      </View>
      <View>
        <FlatList
          data={discoveryMovies}
          numColumns={3}
          renderItem={(item) => <CardMovies data={item.item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            padding: 35,
            paddingBottom: 100,
          }}
        />
      </View>
    </View>
  );
}
