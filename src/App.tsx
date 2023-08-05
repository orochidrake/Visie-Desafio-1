import * as React from 'react';
import Swal from 'sweetalert2';
import './style.css';

export default function App() {
  const input1 = [-4, 4, -3, 3];
  const input2 = [3, -12, 9, 0, , -24, 16,0];
  const input3 = [-1, 8, 5, -6, 7, - 3, 2];

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
        <p>
          Neste desafio você trabalhará com um conjunto de número de tamanho X.
          Seu objetivo é reordenar este conjunto, de forma que os números
          negativos sejam posicionados antes dos números positivos. A ordem dos
          números positivos e negativos deve permanecer a mesma.
        </p>
        <p>
          Exemplo 01 Entrada: C = [-4, 4, -3, 3] Saída: -4 -3 4 3
          <br />
          Os números negativos (-4 e -3) permanecem na mesma ordem de aparição
          do conjunto original, assim como os números positivos.
        </p>
        <p>
          Exemplo 02 Entrada: C = [-4, 2, 0, -3] Saída: -4 -3 2 0
          <br />O zero, um número neutro, nesta atividade deve ser considerado
          `positivo` por não possuir o sinal negativo `-`.
        </p>
      </div>
      <div>
        <button onClick={() => reoderNumbers(input1)}>Entrada 1</button>
      </div>
      <br />
      <div>
        <button onClick={() => reoderNumbers(input2)}>Entrada 2</button>
      </div>
      <br />
      <div>
        <button onClick={() => reoderNumbers(input3)}>Entrada 3</button>
      </div>
    </div>
  );
}
