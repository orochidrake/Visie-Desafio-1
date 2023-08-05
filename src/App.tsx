import * as React from 'react';
import Swal from 'sweetalert2';
import './style.css';

export default function App() {
  const input1 = [3, -12, 9, 0, , -24, 16, 0];
  const input2 = [-1, 8, 5, -6, 7, -3, 2];

  function reoderNumbers(unsortedNumbers) {
    const negative = unsortedNumbers.filter((num) => num < 0);
    const positive = unsortedNumbers.filter((num) => num >= 0);

    const result = negative.concat(positive);
    Swal.fire({
      title: 'o resultado é',
      text: result,
    });
    return result;
  }
  return (
    <div>
      <h1>Desafio 01</h1>

      <div>
        <button onClick={() => reoderNumbers(input1)}>
          Entrada 1 - [3, -12, 9, 0, , -24, 16,0]
        </button>
      </div>
      <br />
      <div>
        <button onClick={() => reoderNumbers(input2)}>
          Entrada 2 [-1, 8, 5, -6, 7, -3, 2]
        </button>
      </div>
      <br />
    </div>
  );
}
