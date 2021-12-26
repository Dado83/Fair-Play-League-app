export default function SkSearch(props) {
  return (
    <form onSubmit={props.submit}>
      <p>
        <a href='https://www.sk.rs/arhiva/rubrika/test-play'>
          <span id='sk'>Svet Kompjutera</span>
        </a>
      </p>
      <fieldset>
        <legend>
          TEST PLAY(<span id='links'></span>)
        </legend>
        <label for='title'>Naslov</label>
        <input type='text' id='title' placeholder='The Witcher 3: Wild Hunt' />
        <label for='author'>Autor</label>
        <input type='text' id='author' placeholder='Miodrag KUZMANOVIĆ' />
        <label for='score'>Ocjena</label>
        <input type='number' id='score' min='1' max='99' placeholder='90' />
        <label for='platform'>Platforma</label>
        <input type='text' id='platform' placeholder='PC, PlayStation 4, Xbox One' />
        <input type='reset' class='button' id='reset' value='Reset' />
        <input type='submit' class='button' id='search' value='Pretraga' />
      </fieldset>
    </form>
  );
}
