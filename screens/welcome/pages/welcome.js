import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "../style";
import { Button } from "../../../components";

const Welcome = props => {
  const { navigation } = props;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <View style={style.mainView}>
        <Text style={style.textStyle}>Coinbase</Text>
        <Text style={style.textStyle}>Clone</Text>
        {visible && (
          <View style={style.bottomView}>
            <Button
              text="Get Started"
              disabled={false}
              onPress={() => navigation.navigate("CreateAccount")}
              btnStyle={style.btnStyle}
              btnTextStyle={style.btnTextStyle}
            />
            <Button
              text="Sign in"
              disabled={false}
              onPress={() => navigation.navigate("Login")}
              btnStyle={style.btnStyle2}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
