import { Button, HStack, Text } from "@chakra-ui/react";
import cities, { Cities } from "../data/cities";

interface Props {
  onBussing: (city: Cities) => void;
}

const Airport = ({ onBussing }: Props) => {
  return (
    <>
      <HStack>
        <Text textAlign="center">
          To depart choose a destination below (1 day travel time)
        </Text>
        {cities.map((city) => (
          <Button key={city.id} onClick={() => onBussing(city)} paddingX="5px">
            {city.name}
          </Button>
        ))}
      </HStack>
    </>
  );
};

export default Airport;
