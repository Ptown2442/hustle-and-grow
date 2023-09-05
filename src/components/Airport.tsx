import { Button, HStack, Text } from "@chakra-ui/react";
import cities, { Cities } from "../data/cities";

interface Props {
  onFlight: (city: Cities) => void;
}

const Airport = ({ onFlight }: Props) => {
  return (
    <>
      <HStack>
        <Text textAlign="center">
          To depart choose a destination below ($300 flights)
        </Text>
        {cities.map((city) => (
          <Button key={city.id} onClick={() => onFlight(city)} paddingX="5px">
            {city.name}
          </Button>
        ))}
      </HStack>
    </>
  );
};

export default Airport;
