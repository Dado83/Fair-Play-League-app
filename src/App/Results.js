import ResultPage from '../components/ResultPage';


export default function Results() {
  let results = [];
  for (let i = 1; i <= 11; i++) {
    results[i] = <ResultPage key={i} mDay={i} />;
  }

  return (
    <div className='content'>
      {results.map(res =>
        res)}
    </div>
  );
}
