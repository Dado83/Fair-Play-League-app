import { useState } from 'react/cjs/react.development';

export default function SkSearch(props) {
  let searchDef = {
    title: '',
    author: '',
    score: 1,
    platform: '',
  };

  const [search, setSearch] = useState(searchDef);

  const onChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setSearch((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
  };

  const submitSearch = (e) => {
    e.preventDefault();
    props.onSubmit(search);
  };

  return (
    <form onSubmit={submitSearch}>
      <p>
        <a href='https://www.sk.rs/arhiva/rubrika/test-play'>
          <span id='sk'>Svet Kompjutera</span>
        </a>
      </p>
      <fieldset>
        <legend>
          TEST PLAY(<span id='links'></span>)
        </legend>
        <label htmlFor='title'>Naslov</label>
        <input
          type='text'
          id='title'
          name='title'
          placeholder='The Witcher 3: Wild Hunt'
          value={search.title}
          onChange={(e) => onChange(e)}
        />
        <label htmlFor='author'>Autor</label>
        <input
          type='text'
          id='author'
          name='author'
          placeholder='Miodrag KUZMANOVIĆ'
          value={search.author}
          onChange={(e) => onChange(e)}
        />
        <label htmlFor='score'>Ocjena</label>
        <input
          type='number'
          id='score'
          name='score'
          min='1'
          max='99'
          placeholder='90'
          value={search.score}
          onChange={(e) => onChange(e)}
        />
        <label htmlFor='platform'>Platforma</label>
        <input
          type='text'
          id='platform'
          name='platform'
          placeholder='PC, PlayStation 4, Xbox One'
          value={search.platform}
          onChange={(e) => onChange(e)}
        />
        <input type='reset' className='button' id='reset' value='Reset' />
        <input type='submit' className='button' id='search' value='Pretraga' />
      </fieldset>
    </form>
  );
}
