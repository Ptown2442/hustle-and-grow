import { Button, Heading } from "@chakra-ui/react";
import cities, { Cities } from "../data/cities";

interface Props {
  onSelectCity: (city: Cities) => void;
}

const StartingPoint = ({ onSelectCity }: Props) => {
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
