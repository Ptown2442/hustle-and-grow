import { Button, Heading } from "@chakra-ui/react";
import cities, { Cities } from "../data/cities";
import { GamePlayData } from "../App";

interface Props {
  onSelectCity: (city: Cities) => void;
  selectedCity: Cities | null;
}

const StartingPoint = ({ onSelectCity, selectedCity }: Props) => {
  return (
    <>
      <Heading textAlign="center">Choose your start location</Heading>
      <div>
        {cities.map((city) => (
          <Button
            key={city.id}
            onClick={() => onSelectCity(city)}
            paddingX="5px"
          >
            {city.name}
          </Button>
        ))}
      </div>
    </>
  );
};

export default StartingPoint;
