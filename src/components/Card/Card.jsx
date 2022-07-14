const Card = (props) => {
  const { name, email, username } = props.robot;
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
      <img alt='robot_face' src={`https://robohash.org/${username}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>b{email}</p>
      </div>
    </div>
  );
};

export default Card;
