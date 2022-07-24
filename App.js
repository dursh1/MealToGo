import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

import {RestaurantsScreen} from "./src/features/restaurants/srceens/restaurants.srceen"

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
