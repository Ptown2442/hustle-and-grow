import { Heading, List, ListItem } from "@chakra-ui/react";
import { InventoryList } from "../App";

interface Props {
  inventoryList: InventoryList;
}

const Inventory = ({ inventoryList }: Props) => {
  return (
    <>
      <Heading>Inventory</Heading>
      <List>
        <ListItem key="IndoKush">Indo-Kush: {inventoryList.indoKush}</ListItem>
        <ListItem key="Cocaine">Cocaine: {inventoryList.cocaine || 0}</ListItem>
        <ListItem key="Molly">Molly: {inventoryList.molly || 0}</ListItem>
        <ListItem key="Meth">Meth: {inventoryList.meth || 0}</ListItem>
        <ListItem key="WildParty">
          WildParty: {inventoryList.wildParty || 0}
        </ListItem>
        <ListItem key="Heroine">Heroine: {inventoryList.heroine || 0}</ListItem>
        <ListItem key='Percs"'>Percs: {inventoryList.percs || 0}</ListItem>
      </List>
    </>
  );
};

export default Inventory;
