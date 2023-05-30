import { useState } from 'react';
import './App.css';
import { calculateNoteDispense } from './helpers/calculateNotes';
import { countNotes } from './helpers/countAllNotes';

function App() {
  const [input, setInput] = useState(0);

  const notes = calculateNoteDispense(input);

  const parsedNotes = notes.filter(note => note.count !== 0);

  const totalNotes = countNotes(parsedNotes);

  return (
    <div>
      <div className="flex">
        <h1>Smart Notes</h1>
        <img src="./icon.png" width={100} className="logo" />
      </div>
      <div>
      <img src="./atm.png" width={400} className="atm" />
      </div>
      <div className="card">
        <span className='title'>Digite quantos reais deseja calcular?</span>
        <label className="input">
          <span className="input__label">R$</span>
          <input className='input_custom'
            type="number"
            placeholder="Quantidade"
            onChange={e => setInput(parseInt(e.target.value))}
          />
        </label>
      </div>
      <h2>Total de notas usadas: {totalNotes}</h2>
      <div className="notes-list">
        {parsedNotes.map(({ count, note }) => (
          <div className="note-card">
            <h4>{count}</h4>
            <img
              src={
                note === 1
                  ? './1.jpeg'
                  : `https://www.bcb.gov.br/content/cedulasemoedas/cedulas_e_moedas/cedulasbc/${note}_front.jpg`
              }
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
