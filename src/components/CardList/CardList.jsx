import Card from './../Card/Card';

const CardList = ({ monsters }) => {
  return (
    <div>
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
