import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DataStore } from "aws-amplify";
import { News } from "../models";
import { useNavigation } from "@react-navigation/native";
import AppButton from "../components/AppButton";
import { Auth, Hub, Storage } from "aws-amplify";
import { withAuthenticator, S3Image } from "aws-amplify-react-native";

export default Home = () => {
  const [news, setNews] = useState([]);
  const [uri, setUri] = useState("");

  useEffect(async () => {
    const newsData = await DataStore.query(News);
    setNews(newsData);
  }, []);

  const renderItem = ({ item }) => (
    <Text style={{ fontSize: 24, alignSelf: "center" }}>{item.title}</Text>
  );

  const [user, setUser] = useState(undefined);

  useEffect(async () => {
    checkAuthState();
    // Storage.configure({ level: "public" });
    const result = await Storage.get(`a.jpg`);
    // result.Body.text().then((string) => {
    //   // handle the String data return String
    //   console.log(string);
    // });
    console.log(result);
    setUri(result);
  }, []);

  useEffect(() => {
    const listener = (data) => {
      const { event } = data.payload;
      console.log(event);
      if (event === "signIn" || event === "signOut") {
        checkAuthState();
      }
    };
    Hub.listen("auth", listener);
    return () => Hub.remove("auth", listener);
  }, []);

  const checkAuthState = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      console.log("User is signed in: " + authUser);
      setUser(authUser);
    } catch (err) {
      console.log("User is not signed in");
      setUser(null);
    }
  };

  async function signOut() {
    try {
      await Auth.signOut();

      setUser(null);
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  const navigation = useNavigation();

  return (
    <SafeAreaView>
      {/* <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      /> */}
      {user ? (
        <AppButton title="登出" onPress={signOut} />
      ) : (
        <AppButton
          title="登入"
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        />
      )}
      {/* <S3Image level="private" imgKey="a.jpg" /> */}
      <Image source={{ uri: uri }} style={{ width: 100, height: 100 }} />
      <Button title="報名" onPress={() => navigation.navigate("Form")} />
    </SafeAreaView>
  );
};
