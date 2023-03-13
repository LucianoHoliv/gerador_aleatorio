const form = document.querySelector("form");
const itensDiv = document.querySelector("#itens");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  itensDiv.innerHTML = "";

  const numItens = parseInt(document.querySelector("#num_itens").value);

  for (let i = 1; i <= numItens; i++) {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    const label = document.createElement("label");
    label.textContent = `Item ${i}:`;

    const input = document.createElement("input");
    input.type = "number";
    input.min = "1";
    input.name = `item_${i}`;
    input.required = true;

    itemDiv.appendChild(label);
    itemDiv.appendChild(input);
    itensDiv.appendChild(itemDiv);
  }

  const gerarPlanilhaBtn = document.createElement("button");
  gerarPlanilhaBtn.type = "button";
  gerarPlanilhaBtn.textContent = "Gerar planilha";
  gerarPlanilhaBtn.addEventListener("click", gerarPlanilha);

  itensDiv.appendChild(gerarPlanilhaBtn);
});

function gerarPlanilha() {
  const itens = [];

  // Adiciona cada item na quantidade informada
  for (
    let i = 1;
    i <= parseInt(document.querySelector("#num_itens").value);
    i++
  ) {
    const quantidade = parseInt(
      document.querySelector(`input[name=item_${i}]`).value
    );
    for (let j = 0; j < quantidade; j++) {
      itens.push(`Item ${i}`);
    }
  }

  // Embaralha os itens
  for (let i = itens.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [itens[i], itens[j]] = [itens[j], itens[i]];
  }

  // Cria a tabela com os itens distribuídos
  const table = document.createElement("table");

  const headerRow = document.createElement("tr");
  const headerCell = document.createElement("th");
  headerCell.textContent = "Itens distribuídos";
  headerCell.colSpan = 2;
  headerRow.appendChild(headerCell);
  table.appendChild(headerRow);

  let currentRow;
  for (let i = 0; i < itens.length; i++) {
    if (i % 2 === 0) {
      currentRow = document.createElement("tr");
      currentRow.dataset.item = itens[i];
      table.appendChild(currentRow);
    }

    const cell = document.createElement("td");
    cell.textContent = itens[i];
    currentRow.appendChild(cell);
  }

  itensDiv.appendChild(table);
}
