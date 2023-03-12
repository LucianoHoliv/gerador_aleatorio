function adicionarCampos() {
  const numCampos = document.getElementById("num-campos").value;
  let htmlCampos = "";
  for (let i = 1; i <= numCampos; i++) {
    htmlCampos += `<label for="campo-${i}">Campo ${i}:</label>`;
    htmlCampos += `<input type="text" id="campo-${i}" name="campo-${i}" required>`;
  }
  const divCampos = document.getElementById("campos");
  divCampos.innerHTML = htmlCampos;
}

function gerarNomes() {
  const numCampos = document.getElementById("num-campos").value;
  const valores = [];
  for (let i = 1; i <= numCampos; i++) {
    const campo = document.getElementById(`campo-${i}`).value;
    valores.push(campo);
  }
  const nomes = [];
  for (let i = 0; i < Math.max(...valores); i++) {
    for (let j = 0; j < valores.length; j++) {
      if (i < valores[j]) {
        nomes.push(`Campo ${j + 1}`);
      }
    }
  }
  const tabela = document.getElementById("tabela-resultados");
  let htmlTabela = "";
  for (let i = 0; i < nomes.length; i++) {
    htmlTabela += `<tr><td>${i + 1}</td><td>${nomes[i]}</td></tr>`;
  }
  tabela.innerHTML = htmlTabela;
}
