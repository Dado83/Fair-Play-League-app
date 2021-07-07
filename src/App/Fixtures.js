import Fixture from '../components/Fixture';


export default function Fixtures() {
  const site = document.location.hostname;
  let fixtures = [];
  for (let i = 1; i <= 11; i++) {
    fixtures[i] = <Fixture key={i} mDay={i} site={site} />;
  }

  return (
    <>
      <h1>Raspored:</h1>
      <div className='content'>
        {fixtures.map(fix =>
          fix)}
      </div>
    </>
  );
}
