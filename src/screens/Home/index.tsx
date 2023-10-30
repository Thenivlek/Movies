import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { MagnifyingGlass } from "phosphor-react-native";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> Oque Você quer assistir hoje?</Text>
      <View style={styles.containerInput}>
        <TextInput style={styles.input} placeholder="Buscar"></TextInput>
        <MagnifyingGlass
          color="#FFF"
          size={25}
          weight="light"
        ></MagnifyingGlass>
      </View>
    </View>
  );
}
