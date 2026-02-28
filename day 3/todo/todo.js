const input = document.getElementById('taskIn'), p = document.getElementById('pending'), d = document.getElementById('done');

function add() {
//   if (!input.value.trim()) return;
  const li = document.createElement('li');
//   li.innerHTML = `<span>${input.value}</span><button class="btn-act">✓</button>`;
  
//   li.querySelector('button').onclick = () => {
//     if (li.parentNode === p) {
//       d.appendChild(li);
//       li.querySelector('button').innerText = '✕';
//     } else {
//       li.remove();
//     }
//   };

  p.appendChild(li);
  input.value = '';
}