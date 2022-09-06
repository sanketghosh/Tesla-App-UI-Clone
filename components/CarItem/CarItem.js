import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGear, faToolbox } from "@fortawesome/free-solid-svg-icons";

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.backgroundImage}
      />
      {/* header  */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faGear} style={styles.headerIcon} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Model G X69</Text>
        <TouchableOpacity>
          <FontAwesomeIcon
            icon={faToolbox}
            style={styles.headerIcon}
            size={24}
          />
        </TouchableOpacity>
      </View>
      {/* battery section  */}
      <View style={styles.batterySection}>
        <Image
          style={styles.batteryImage}
          source={require("../../assets/battery.png")}
        />
        <Text style={styles.batteryText}>150 miles</Text>
      </View>

      {/* status of the car  */}
      <View style={styles.status}>
        <Text style={styles.statusText}>Parked</Text>
      </View>
    </View>
  );
};

export default CarItem;
