let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = '';

function adicionar() {
  // recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    //aqui eu quero o elemento que esta antes do -
    let nomeProduto = produto.split('-')[0];
    //aqui eu quero o elemento que esta depos do cifrao
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
     // calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario;
    let listaCarrinho = document.getElementById('lista-produtos');
    
      //adcionar no carrinho
    //para cada produto
    listaCarrinho.innerHTML = listaCarrinho.innerHTML +` <section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`

  //atualizar valor total
  totalGeral = totalGeral + preco;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$ ${totalGeral}`;
  document.getElementById('quantidade').value = 0;
  
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = '';
}