import Fixture from '../components/Fixture/Fixture';

export default function Fixtures() {
  let fixtures = [];
  for (let i = 1; i <= 11; i++) {
    fixtures[i] = <Fixture key={i} mDay={i} />;
  }

  return (
    <div className='content'>
      <h1>fixtures</h1>
      <hr />
      {fixtures.map(fix =>
        fix)}
    </div>
  );
}
