import Card from './../Card/Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot) => (
        <Card key={robot.id} robot={robot} />
      ))}
    </div>
  );
};

export default CardList;
