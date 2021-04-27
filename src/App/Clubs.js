import Club from '../components/Club/Club';

export default function Clubs() {
  let clubs = [];
  for (let i = 1; i <= 11; i++) {
    clubs[i] = <Club key={i} id={i} />;
  }

  return (
    clubs.map(club =>
      club)
  );
}
