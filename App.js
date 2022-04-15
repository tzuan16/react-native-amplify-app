import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";
import { Authenticator } from "aws-amplify-react-native";
import SignInPage from "./src/screens/SignIn";

Amplify.configure(awsconfig);

function AppWithAuth() {
  return (
    // <Authenticator usernameAttributes="email">{/* <App /> */}</Authenticator>
    <SignInPage />
  );
}

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default AppWithAuth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
