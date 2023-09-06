import { useState } from "react";
import {
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  Select,
  Text,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import StartingPoint from "./components/StartingPoint";
import cities, { Cities } from "./data/cities";
import Actions from "./components/Actions";
import Inventory from "./components/Inventory";
import Airport from "./components/Airport";
import BusStation from "./components/BusStation";
import Shop from "./components/Shop";

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

  const [qty, setQty] = useState(1);

  const [isShopping, setIsShopping] = useState("false");

  const [isStation, setIsStation] = useState("false");

  const [isFlying, setIsFlying] = useState("false");

  const [inventory, setInventory] = useState<InventoryList>(
    {} as InventoryList
  );

  let currents = `wallet: ${gamePlayData.money || 0} 
    debt: ${gamePlayData.debt || 0} day: ${gamePlayData.day || 0} hour: ${
    gamePlayData.hour || 0
  }`;

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
        {isShopping === "false" &&
          isFlying === "false" &&
          isStation === "false" && (
            <Button
              onClick={() => {
                setIsShopping("true");
              }}
            >
              Visit the local dealer
            </Button>
          )}
        {isShopping === "false" &&
          isFlying === "false" &&
          isStation === "false" &&
          gamePlayData.money >= 300 && (
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
        {isShopping === "false" &&
          isFlying === "false" &&
          isStation === "false" && (
            <Button
              onClick={() => {
                setIsStation("true");
              }}
            >
              Travel by bus (Free but slower)
            </Button>
          )}
      </GridItem>
      <GridItem area="travel">
        {" "}
        {isStation === "true" && (
          <BusStation
            onBussing={(city) => {
              let day = gamePlayData.day + 1;
              setGamePlayData({ ...gamePlayData, day, city });
              setIsStation("false");
            }}
          ></BusStation>
        )}
        {isShopping === "true" && (
          <>
            <HStack>
              <Heading fontSize={20}>
                Welcome to King Prawn Pawn...we got what you need
              </Heading>
              <Text fontSize={15}>
                select whatever you want, you can buy singles or in bulk
              </Text>
              <Button onClick={() => setIsShopping("false")}>
                Exit the Store
              </Button>
            </HStack>
            <HStack>
              <Heading fontSize={13}>
                Select Quantity, currently selected : {qty}
              </Heading>
              <Button onClick={() => setQty(1)}>1X</Button>
              <Button onClick={() => setQty(10)}>10X</Button>
              <Button onClick={() => setQty(50)}>50X</Button>
              <Button onClick={() => setQty(100)}>100X</Button>
            </HStack>
            <HStack>
              <Heading fontSize={13}>
                Click below to complete your purchase, then leave!
              </Heading>
              <Button
                onClick={() => {
                  let cocaine = inventory.cocaine + qty;
                  let money =
                    gamePlayData.money -
                    qty * 250 * gamePlayData.city?.timezone;
                  setGamePlayData({ ...gamePlayData, money });
                  setInventory({ ...inventory, cocaine });
                }}
              >
                Cocaine: Buy {qty} oz. Cost: $
                {qty * (gamePlayData.city.timezone || 1) * 25}
              </Button>
            </HStack>
          </>
        )}
        {isFlying === "true" && (
          <Airport
            onFlight={(city) => {
              let hour =
                gamePlayData.hour + 5 < 24
                  ? gamePlayData.hour + 5
                  : gamePlayData.hour + 5 - 24;
              let day =
                gamePlayData.hour < 5 ? gamePlayData.day + 1 : gamePlayData.day;
              setGamePlayData({ ...gamePlayData, city, day, hour });
              setIsFlying("false");
            }}
          ></Airport>
        )}
      </GridItem>
    </Grid>
  );
}

export default App;
