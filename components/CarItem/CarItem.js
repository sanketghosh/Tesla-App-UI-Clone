import { Text, View } from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGear, faToolbox } from "@fortawesome/free-solid-svg-icons";

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      {/* header  */}
      <View style={styles.header}>
        <FontAwesomeIcon icon={faGear} style={styles.headerIcon} size={24} />
        <Text style={styles.headerText}>Model G X69</Text>
        <FontAwesomeIcon icon={faToolbox} style={styles.headerIcon} size={24} />
      </View>
    </View>
  );
};

export default CarItem;
