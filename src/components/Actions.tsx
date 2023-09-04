import { Button, HStack, Heading } from "@chakra-ui/react";
import { GamePlayData } from "../App";

interface Props {
  onHustler: (money: number) => void;
  onFront: (indoKush: number) => void;
  onBorrow: (money: number) => void;
}

const Actions = ({ onBorrow, onFront, onHustler }: Props) => {
  return (
    <HStack>
      <Heading>How do you want to start?</Heading>
      <Button onClick={() => onBorrow(5000)}>
        Borrow: 5K loan(due in 30 days)
      </Button>
      <Button onClick={() => onFront(100)}>
        Front: 100 units of Kush ($1,000 due in 10 days)
      </Button>
      <Button onClick={() => onHustler(500)}>
        Hustler: only $500 starting cash
      </Button>
    </HStack>
  );
};

export default Actions;
