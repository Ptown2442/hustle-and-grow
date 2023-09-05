import { useState } from "react";
import {
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  Select,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import StartingPoint from "./components/StartingPoint";
import cities, { Cities } from "./data/cities";
import Actions from "./components/Actions";
import Inventory from "./components/Inventory";
import Airport from "./components/Airport";

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

  const [isFlying, setIsFlying] = useState("false");

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
        onSelectCity={(city) => setGamePlayData({ ...gamePlayData, city })}
      ></StartingPoint>
    );

  if (!gamePlayData.money && !inventory.indoKush)
    return (
      <Actions
        onHustler={(money) => {
          let hour = 0;
          let day = 0;
          let cocaine = 0;
          let heroine = 0;
          let indoKush = 0;
          let molly = 0;
          let wildParty = 0;
          let percs = 0;
          let meth = 0;
          setInventory({
            cocaine,
            heroine,
            indoKush,
            molly,
            wildParty,
            meth,
            percs,
          });
          setGamePlayData({ ...gamePlayData, money, day, hour });
        }}
        onFront={(indoKush) => {
          let hour = 0;
          let day = 0;
          let debt = 100;
          let money = 0;
          let category = "indoKush";
          let amount = 10;
          let cocaine = 0;
          let heroine = 0;
          let molly = 0;
          let wildParty = 0;
          let percs = 0;
          let meth = 0;
          setInventory({
            cocaine,
            heroine,
            indoKush,
            molly,
            wildParty,
            meth,
            percs,
          });
          setGamePlayData({
            ...gamePlayData,
            hour,
            day,
            debt,
            money,
            amount,
            category,
          });
        }}
        onBorrow={(money) => {
          let day = 0;
          let hour = 0;
          let category = "money";
          let debt = 5000;
          let amount = 30;
          let cocaine = 0;
          let heroine = 0;
          let indoKush = 0;
          let molly = 0;
          let wildParty = 0;
          let percs = 0;
          let meth = 0;
          setInventory({
            cocaine,
            heroine,
            indoKush,
            molly,
            wildParty,
            meth,
            percs,
          });
          setGamePlayData({
            ...gamePlayData,
            day,
            hour,
            category,
            money,
            amount,
            debt,
          });
        }}
      ></Actions>
    );
  return (
    <Grid
      templateAreas={{
        base: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "200px 1fr",
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
        {isFlying === "true" && (
          <Airport
            onFlight={(city) => setGamePlayData({ ...gamePlayData, city })}
          ></Airport>
        )}
        {isFlying === "false" && gamePlayData.money >= 300 && (
          <Button
            onClick={() => {
              let money = gamePlayData.money - 300;
              setGamePlayData({ ...gamePlayData, money });

              setIsFlying("true");
            }}
          >
            Book a Flight ($300 cost)
          </Button>
        )}
        {isFlying === "false" && (
          <Button
            onClick={() => {
              let day = gamePlayData.day + 1;
            }}
          ></Button>
        )}
      </GridItem>
    </Grid>
  );
}

export default App;
