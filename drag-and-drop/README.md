Projeto Drag and Drop

Neste projeto foi realizado um web site para ler e manusear arquivos em CSV. Para desenvolve-lo utilizamos a linguagem React.

As dependências utilizadas foram:
 - React
 - papaparse

O projeto foi desenvolvido a partir do arquivo App.js com um Form.js que é reenderizado condicionalmente. Além do arquivo de css para estilização do mesmo e de um arquivo demo.csv utilizado como padrão para testes. 

O app funciona a partir de um arquivo em CSV que contenha as colunas id, nome e telefone. Ao carregar o arquivo, o app irá ler o mesmo e renderizar a tabela. Com a tabela renderizada é possível adicionar, editar e excluir os contatos. O formulário de adição só funcionará após o carregamento do arquivo. 

O layout inicial da página terá esse formato:

![image](https://user-images.githubusercontent.com/82220640/156862052-188ea4c4-c279-4c6a-aebe-cfa0b53fd0a8.png)

Ao carregarmos o arquivo, será renderizada a tabela:

![image](https://user-images.githubusercontent.com/82220640/156862182-b9410a6c-700e-4348-abd8-b1724fb09c7d.png)

Para adicionarmos um novo contato, basta preenchermos o formulário de Adicionar Contato e clicar em enviar:

![image](https://user-images.githubusercontent.com/82220640/156862223-d2fa1761-068f-4d67-b966-e97e1f9d1cbb.png)

![image](https://user-images.githubusercontent.com/82220640/156862239-de4faa34-5000-43e5-84e2-0952c1885492.png)

Para excluir um contato é só clicar na lixeira da coluna "Editar" da linha do contato desejado.

E para editar, clicar no botão a direita da lixeira, onde será aberto um outro formulário com os dados do contato a ser editado:

![image](https://user-images.githubusercontent.com/82220640/156862380-b9f36203-9a5d-4916-94a5-f2fec22790a7.png)

As mudanças na tabela não alteram o arquivo original. Para desfazer basta atualizar a página e recarregar o arquivo novamente.

Para maiores informações entre em contato com rpaschoal90@gmail.com
