import Fixture from '../components/Fixture/Fixture';

export default function Fixtures() {
  let fixtures = [];
  for (let i = 1; i <= 11; i++) {
    fixtures[i] = <Fixture key={i} mDay={i} />;
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
