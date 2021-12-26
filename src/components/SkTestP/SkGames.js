export default function SkGames(props) {
  return (
    <table>
      <thead>
        <tr className='row'>
          <th>Datum</th>
          <th>Naslov</th>
          <th>Autor</th>
          <th>Ocjena</th>
          <th className='hidden'>Platforma</th>
        </tr>
      </thead>
      <tbody>
        {props.list.map((g) => (
          <tr key={g.id}>
            <td>{g.date}</td>
            <td>{g.title}</td>
            <td>{g.author}</td>
            <td>{g.score}</td>
            <td>{g.platform}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
