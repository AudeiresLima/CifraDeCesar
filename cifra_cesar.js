function codificarCesar() {
  const texto = document.getElementById('textoOriginal').value;
  const deslocamento = parseInt(document.getElementById('deslocamento').value);
  
  const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
  let textoCodificado = '';

  for (let i = 0; i < texto.length; i++) {
      const letra = texto[i].toLowerCase();
      if (alfabeto.includes(letra)) {
          const indice = alfabeto.indexOf(letra);
          const novoIndice = (indice + deslocamento) % 26;
          textoCodificado += alfabeto[novoIndice];
      } else {
          textoCodificado += letra; 
      }
  }

  document.getElementById('resultado').textContent = textoCodificado;
}

function decodificarCesar() {
  const texto = document.getElementById('textoOriginal').value;
  const deslocamento = parseInt(document.getElementById('deslocamento').value);
  
  const textoDecodificado = codificarCesarInterno(-deslocamento, texto);
  document.getElementById('resultado').textContent = textoDecodificado;
}

function codificarCesarInterno(deslocamento, texto) {
  const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
  let textoCodificado = '';

  for (let i = 0; i < texto.length; i++) {
      const letra = texto[i].toLowerCase();
      if (alfabeto.includes(letra)) {
          const indice = alfabeto.indexOf(letra);
          const novoIndice = (indice + deslocamento + 26) % 26; 
          textoCodificado += alfabeto[novoIndice];
      } else {
          textoCodificado += letra; 
      }
  }

  return textoCodificado;
}