const table = document.createElement('table');
table.style.borderCollapse = 'collapse';
table.style.width = '10%';

for (let i = 1; i <= 5; i++) {
  const tr = document.createElement('tr');
  for (let j = 1; j <= 5; j++) {
    const td = document.createElement('td');
    td.textContent = `R${i} C${j}`;
    td.style.border = '1px solid #333';
    td.style.padding = '1px';
    td.style.textAlign = 'center';
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

document.body.appendChild(table);