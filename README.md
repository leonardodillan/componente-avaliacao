# Componente de avaliação com estrelas (estático)

- O ícone de estrela está sendo usado de uma biblioteca chamada 'react-icons' (deve instalar também no projeto)

- Foi usado o hook useState para controlar os estados do componente de votação



const handleClickVoto = é só uma função para pegar os valores (a função que irá enviar é a handleVoto)

const handleVoto = é uma função assincrona que irá enviar o voto para a API (deixei um try comentado no código com um exemplo de como pode ser enviado para a API)



Validações: 
- Se ao clicar em votar e não estiver selecionado nenhuma estrela, irá aparecer um alert

- Se selecionado alguma estrela e clicar em votar, o número avaliado irá aparecer no lugar do botão

** IMPORTANTE = Pelo fato de ser estático, falta implementar a comunicação com a API no código
