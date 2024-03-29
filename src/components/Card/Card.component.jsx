const Card = (props) => {
  const { name, email, id } = props.monster;
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=200x200`}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
