import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { Home } from "./src/screens/Home/index";

export default function App() {
  return (
    <>
      <Home></Home>
      <StatusBar style="auto" />
    </>
  );
}
