import { useState } from "react";
import { Grid, GridItem, Heading } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import StartingPoint from "./components/StartingPoint";
import { Cities } from "./data/cities";

export interface GamePlayData {
  money: number;
  city: Cities | null;
  day: number;
  hour: number;
  debt: number | null;
  inventory: number | null;
}

function App() {
  const [gamePlayData, setGamePlayData] = useState<GamePlayData>(
    {} as GamePlayData
  );
  let currents = `wallet: ${gamePlayData.money || 0} location: ${
    gamePlayData.city?.name || "unknown"
  } debt: ${gamePlayData.debt || 0} days passed: ${
    gamePlayData.day || 0
  } hours passed: ${gamePlayData.hour || 0}`;

  if (!gamePlayData.city)
    return (
      <StartingPoint
        selectedCity={gamePlayData.city}
        onSelectCity={(city) => setGamePlayData({ ...gamePlayData, city })}
      ></StartingPoint>
    );
  return (
    <Grid
      templateAreas={{
        base: `"nav nav" "main main"`,
      }}
      templateColumns={{
        base: "350px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar city={gamePlayData.city}></NavBar>
        <Heading fontSize="15px">{currents}</Heading>
      </GridItem>
      <GridItem area="main"></GridItem>
    </Grid>
  );
}

export default App;
