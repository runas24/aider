import * as React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Add = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.add}>
      <View style={[styles.wrapper, styles.frameSpaceBlock]}>
        <TextInput style={styles.textTypo} placeholder="Название товара" />
      </View>
      <View style={[styles.container, styles.frameFlexBox]}>
        <TextInput style={styles.textTypo} placeholder="Описание товара" />
      </View>
      <Pressable style={[styles.frame, styles.frameFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>
          Загрузить фото товара
        </Text>
      </Pressable>
      <TouchableOpacity
        style={[styles.frameTouchableopacity, styles.frameFlexBox]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Main")}
      >
        <Text style={[styles.text, styles.textTypo]}>Добавить товар</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  frameSpaceBlock: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_6xl,
  },
  frameFlexBox: {
    marginTop: 37,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    borderRadius: Border.br_8xs,
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
  },
  wrapper: {
    backgroundColor: "#8d8d8d",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    borderRadius: Border.br_8xs,
    paddingHorizontal: Padding.p_6xl,
    alignItems: "center",
  },
  container: {
    backgroundColor: "#b1b1b1",
    height: 91,
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_6xl,
  },
  text: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  frame: {
    backgroundColor: "#359d78",
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_6xl,
    alignItems: "center",
  },
  frameTouchableopacity: {
    backgroundColor: Color.colorDarkgray_100,
    paddingHorizontal: 36,
    paddingVertical: 14,
    alignItems: "center",
  },
  add: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    paddingHorizontal: 0,
    paddingVertical: 113,
    alignItems: "center",
  },
});

export default Add;
