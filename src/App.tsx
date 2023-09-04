import { useState } from "react";
import { Grid, GridItem, Heading } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import StartingPoint from "./components/StartingPoint";
import { Cities } from "./data/cities";
import Actions from "./components/Actions";
import Inventory from "./components/Inventory";
import Operations from "./components/Operations";

export interface GamePlayData {
  money: number;
  city: Cities | null;
  day: number;
  hour: number;
  debt: number | null;
  amount: number | null;
  category: string | null;
}

export interface InventoryList {
  cocaine: number | null;
  heroine: number | null;
  indoKush: number | null;
  molly: number | null;
  wildParty: number | null;
  percs: number | null;
  meth: number | null;
}

function App() {
  const [gamePlayData, setGamePlayData] = useState<GamePlayData>(
    {} as GamePlayData
  );

  const [inventory, setInventory] = useState<InventoryList>(
    {} as InventoryList
  );

  let currents = `wallet: ${gamePlayData.money || 0} 
    debt: ${gamePlayData.debt || 0} days passed: ${
    gamePlayData.day || 0
  } hours passed: ${gamePlayData.hour || 0}`;

  if (!gamePlayData.city && (gamePlayData.money || inventory.indoKush))
    return (
      <StartingPoint
        selectedCity={gamePlayData.city}
        onSelectCity={(city) => setGamePlayData({ ...gamePlayData, city })}
      ></StartingPoint>
    );

  if (!gamePlayData.money && !inventory.indoKush)
    return (
      <Actions
        onHustler={(money) => setGamePlayData({ ...gamePlayData, money })}
        onFront={(indoKush) => setInventory({ ...inventory, indoKush })}
        onBorrow={(money) => setGamePlayData({ ...gamePlayData, money })}
      ></Actions>
    );
  return (
    <Grid
      templateAreas={{
        base: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "350px 1fr 2fr",
      }}
    >
      <GridItem area="nav">
        <NavBar city={gamePlayData.city}></NavBar>
        <Heading fontSize="15px">{currents}</Heading>
      </GridItem>
      <GridItem area="aside">
        <Inventory inventoryList={inventory}></Inventory>
      </GridItem>
      <GridItem area="main">
        <Operations></Operations>
      </GridItem>
    </Grid>
  );
}

export default App;
