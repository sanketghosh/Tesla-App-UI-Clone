import { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faGear,
  faToolbox,
  faFan,
  faKey,
  faLock,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "../Menu/Menu";

const CarItem = () => {
  const [locked, setLocked] = useState(false);

  function clickLockHandler() {
    if (locked) {
      setLocked(false);
    } else {
      setLocked(true);
    }
  }

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

      {/* controls icons  */}
      <View style={styles.controls}>
        <TouchableOpacity>
          <View style={styles.controlsButton}>
            <FontAwesomeIcon
              style={styles.controlButtonIcon}
              icon={faFan}
              size={37}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.controlsButton}>
            <FontAwesomeIcon
              style={styles.controlButtonIcon}
              icon={faKey}
              size={37}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={clickLockHandler}>
          <View style={styles.controlsButton}>
            <FontAwesomeIcon
              style={styles.controlButtonIcon}
              icon={locked ? faLock : faUnlockAlt}
              size={37}
            />
          </View>
        </TouchableOpacity>
      </View>
      <Menu />
    </View>
  );
};

export default CarItem;
