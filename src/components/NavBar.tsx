import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/IMG_1332.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import { Cities } from "../data/cities";

interface Props {
  city: Cities;
}

const NavBar = ({ city }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <Text>current location: {city.name}</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
