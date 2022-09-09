import React from "react";
import styles from "./styles";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight, faMusic } from "@fortawesome/free-solid-svg-icons";
import items from "./items";

const Menu = () => {
  return (
    <View style={styles.menuItems}>
      {items.map((item) => (
        <TouchableOpacity key={item.id}>
          <View style={styles.menuRow}>
            <FontAwesomeIcon
              style={styles.menuIcon}
              icon={item.icon}
              size={25}
            />
            <View style={styles.menuTextBox}>
              <Text style={styles.menuText}>{item.title}</Text>
              {item.subTitle && (
                <Text style={styles.menuSubTitle}>{item.subTitle}</Text>
              )}
            </View>
            <FontAwesomeIcon
              style={styles.menuChevronIcon}
              icon={faChevronRight}
              size={20}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Menu;
