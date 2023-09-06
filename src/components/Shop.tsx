
import {
  Button,
  FormLabel,
  HStack,
  Heading,
  Select,
  Text,
} from "@chakra-ui/react";

interface Props {
  money: number | null;
  meth: number | null;
  cocaine: number;
  wildparty: number;
  indoKush: number;
  percs: number;
  heroine: number;
  molly: number;
  qty: number;
  city: {
    id: number;
    location: string;
    name: string;
    timezone: number;
  }
}

const Shop = ({
  qty, city,
  money,
  meth,
  cocaine,
  molly,
  percs,
  wildparty,
  indoKush,
  heroine,
}: Props) => {
  return (
    <>
      <HStack>
        <Heading>Welcome to King Prawn Pawn...we got what you need</Heading>
        <Text>select whatever you want, you can buy singles or in bulk</Text>
        <Button></Button>
      </HStack>
      <HStack>
        <Heading>Select Quantity, currently selected : {qty}</Heading>
        <Button onClick={() => (qty = 1)}>1X</Button>
        <Button onClick={() => (qty = 10)}>10X</Button>
        <Button onClick={() => (qty = 50)}>50X</Button>
        <Button onClick={() => (qty = 100)}>100X</Button>
      </HStack>
      <HStack>
        <Heading>Click below to complete purchase, then get out.</Heading>
        <Button onClick={(money: Props, meth: Props, city: Props) => }>Buy {qty} Meth: cost${(city.timezone * qty * 300)}</Button>
        <Button onClick={}></Button>
        <Button onClick={}></Button>
        <Button onClick={}></Button>
        <Button onClick={}></Button>
        <Button onClick={}></Button>
        <Button onClick={}></Button>
      </HStack>
    </>
  );
};

export default Shop;
