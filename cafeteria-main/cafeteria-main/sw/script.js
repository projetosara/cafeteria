let carrinho = [];
let carrinhoCount = 0;

function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  carrinhoCount++;
  document.getElementById('carrinhoCount').textContent = carrinhoCount;
}

function abrirCarrinho() {
  const modal = document.getElementById('carrinhoModal');
  const itensCarrinho = document.getElementById('itensCarrinho');
  const totalCarrinho = document.getElementById('totalCarrinho');
  
  itensCarrinho.innerHTML = '';  // Limpa a lista de itens

  let total = 0;
  carrinho.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    itensCarrinho.appendChild(li);
    total += item.preco;
  });

  totalCarrinho.textContent = total.toFixed(2);
  modal.style.display = 'block';
}

function fecharCarrinho() {
  const modal = document.getElementById('carrinhoModal');
  modal.style.display = 'none';
}

function finalizarCompra() {
  alert('Compra finalizada!');
  carrinho = [];
  carrinhoCount = 0;
  document.getElementById('carrinhoCount').textContent = carrinhoCount;
  fecharCarrinho();
}

document.getElementById('carrinhoBtn').onclick = abrirCarrinho;
