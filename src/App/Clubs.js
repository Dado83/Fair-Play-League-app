import Club from '../components/Club';


export default function Clubs() {
  let clubs = [];
  for (let i = 1; i <= 11; i++) {
    clubs[i] = <Club key={i} id={i} />;
  }

  return (
    <div className='content'>
      { clubs.map(club =>
        club)}
    </div>
  );
}
