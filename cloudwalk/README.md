# Teste de processo seletivo para empresa CloudWalk

## **Entendendo a industria:**

**1 – Explicar o fluxo de dinheiro e o fluxo de informações no mercado adquirente e o papel dos principais players.**

Os principais playes dentro de um fluxo de pagamento são adquirente, a bandeira do cartão e o banco emissor. O fluxo das informações para uma compra online, por exemplo, desde a compra até o lojista receber o recurso é:

  1. Cliente faz a compra;
  2. Loja faz o checkout da compra, e verifica os meios de pagamento;
  3. A informação é enviada ao adquirente que repassa para a empresa portadora da bandeira do cartão, que aciona o banco emissor. É o banco emissor que irá verificar se existe saldo, limite ou qualquer outra informação para autorizar ou não a compra;
  4. Se a compra for aprovada pelo banco emissor, as informações fazem o caminho inverso retornando ao meio de pagamento, onde será realizada a comunicação com o sistema antifraude através de um gateway de pagamento, que autorizará ou não a transação;
  5. Por fim a informação volta para o consumidor, e assim o lojista já pode preparar o pedido.


**2 – Explique a diferença entre adquirente, subadquirente e gateway de pagamento e como o fluxo explicado na questão 1 muda para esses players.**

A diferença entre adquirente, subadquirente, gateway pde pagamentos é:

  • Adquirente: É o responsável pela conexão entre o estabelecimento portador da maquininha e a bandeira do cartão (Master card, visa e etc). É ele quem fornece a infraestrutura para o processo de pagamento, como a própria maquininha e o sistema de gestão da liquidação financeira;
  • Subadquirente: É um intermediário entre o lojista, o adquirente e o cliente. É muito vantajoso para empresas de menor porte, devido a sua facilidade, rapidez e principalmente menor custo de implementação. 

O adquirente e subadquirente trabalham em conjunto na expansão de ofertas de mercado. É o adquirente quem faz a comunicação entre subadquirente, bancos emissores e as bandeiras.

  • Gateway de pagamento: Interface virtual que envia as informações para o adquirente. A diferença para o subadquirente é que funciona de forma integrada à página do e-commerce. Seu papel é processar os dados no momento em que a compra é finalizada.


**3 – Explique o que é KYC (Know Your Customer) e como ele é importante para a empresa e todo o setor de pagamentos.**

A importância do KYC é para prevenção e segurança. É necessário entender a natureza das atividades e a legitimidade da renda do cliente para prevenir possíveis ilegalidades como lavagem de dinheiro, corrupção e etc. Isso protege tanto o negócio quanto o cliente.

Esse processo de estudo do cliente, é utilizado no mundo inteiro e em diversos setores da economia, como no sistema de pagamentos e no mercado financeiro.


## **Escrevendo código**
A query está no arquivo .sql do repositório. 

Os clientes que apresentaram data negativa possuem 2 cadastros. Provavelmente o primeiro foi inativado e realizou um segundo cadastro, com isso ele calculará a data dp primeiro com o segundo. Dando a quantidade de horas negativa. 

Qualquer dúvida entrar em contato em rpaschoal90@gmail.com
