import Result from '../components/Result';


export default function Results() {
  let results = [];
  for (let i = 1; i <= 11; i++) {
    results[i] = <Result key={i} mDay={i} />;
  }

  return (
    <div className='content'>
      {results.map(res =>
        res)}
    </div>
  );
}
