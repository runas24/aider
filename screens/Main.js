import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Main = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <ScrollView
        style={styles.mainInner}
        horizontal={true}
        indicatorStyle="default"
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        pagingEnabled={true}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={[styles.frameParent, styles.wrapperLayout]}>
          <View style={[styles.parent, styles.iconLayout]}>
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/.png")}
            />
            <Text style={[styles.text, styles.textTypo]} numberOfLines={1}>
              Название товара
            </Text>
            <Text style={[styles.text1, styles.textTypo]} numberOfLines={4}>
              Описание товара
            </Text>
          </View>
          <View style={[styles.parent, styles.iconLayout]}>
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/.png")}
            />
            <Text style={[styles.text, styles.textTypo]} numberOfLines={1}>
              Название товара
            </Text>
            <Text style={[styles.text1, styles.textTypo]} numberOfLines={4}>
              Описание товара
            </Text>
          </View>
          <View style={[styles.parent, styles.iconLayout]}>
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/.png")}
            />
            <Text style={[styles.text, styles.textTypo]} numberOfLines={1}>
              Название товара
            </Text>
            <Text style={[styles.text1, styles.textTypo]} numberOfLines={4}>
              Описание товара
            </Text>
          </View>
          <View style={[styles.parent, styles.iconLayout]}>
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/.png")}
            />
            <Text style={[styles.text, styles.textTypo]} numberOfLines={1}>
              Название товара
            </Text>
            <Text style={[styles.text1, styles.textTypo]} numberOfLines={4}>
              Описание товара
            </Text>
          </View>
          <View style={[styles.parent, styles.iconLayout]}>
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/.png")}
            />
            <Text style={[styles.text, styles.textTypo]} numberOfLines={1}>
              Название товара
            </Text>
            <Text style={[styles.text1, styles.textTypo]} numberOfLines={4}>
              Описание товара
            </Text>
          </View>
          <View style={[styles.parent, styles.iconLayout]}>
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/.png")}
            />
            <Text style={[styles.text, styles.textTypo]} numberOfLines={1}>
              Название товара
            </Text>
            <Text style={[styles.text1, styles.textTypo]} numberOfLines={4}>
              Описание товара
            </Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={[styles.wrapper, styles.wrapperLayout]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Add")}
      >
        <Text style={styles.textTypo}>Добавить товар</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  wrapperLayout: {
    width: 375,
    alignItems: "center",
  },
  iconLayout: {
    borderRadius: Border.br_2xs,
    width: 152,
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  icon: {
    height: 101,
    overflow: "hidden",
    width: 152,
  },
  text: {
    marginTop: 10,
  },
  text1: {
    height: 66,
    marginTop: 10,
    width: 152,
  },
  parent: {
    backgroundColor: Color.colorGray_100,
    height: 202,
    width: 152,
  },
  frameParent: {
    height: 626,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
  mainInner: {
    height: 750,
    maxHeight: 750,
    width: "100%",
  },
  wrapper: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorDarkgray_100,
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: 18,
    marginTop: 10,
  },
  main: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    alignItems: "center",
    width: "100%",
  },
});

export default Main;
