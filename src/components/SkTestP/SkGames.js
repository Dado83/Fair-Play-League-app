export default function SkGames(props) {
  return (
    <table className='sk-table'>
      <thead>
        <tr className='row'>
          <th>Datum</th>
          <th>Naslov</th>
          <th className='hidden-author'>Autor</th>
          <th>Ocjena</th>
          <th className='hidden-platform'>Platforma</th>
        </tr>
      </thead>
      <tbody>
        {props.list.map((g) => (
          <tr key={g.id}>
            <td>{g.date}</td>
            <td>
              <a href={g.link}>{g.title}</a>
            </td>
            <td className='hidden-author'>{g.author}</td>
            <td>{g.score}</td>
            <td className='hidden-platform'>{g.platform}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
