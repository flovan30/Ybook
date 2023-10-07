import Navbar from "../components/Navbar";
import ListItem from "../components/encyclopedie";

const EncyclopediaPage = () => {
  return (
    <>
      <Navbar />
      <en item="casque" />
      <ListItem item="armure" />
      <ListItem item="gants" />
      <ListItem item="pantalons" />
      <ListItem item="bottes" />
      <ListItem item="bouclier" />
      <ListItem item="arme" />
    </>
  );
};
export default EncyclopediaPage;
