# java-todo-front

## Um pouco da aplicação
Este projeto é o frontend da aplicação do TODO LIST, ele renderiza horizontalmente cards de uma lista a ser feita.

## O que foi utilizado
* ReactJS
* Boostrap

## Instalando
Para rodar a aplicação você precisa instalar o NPM, que é a ferramenta de gerenciamento de dependência do NodeJS. É aconselhavel depois de ter o NPM instalar o YARN (ferramenta com o mesmo intuíto do NPM).

Após instalado o NPM é possível executar **npm start** para que todas as dependência sejam baixadas e o servidor de desenvolvimento fique disponível.

## Observações
A estrutura da aplicação foi criada utilizando o boilerplate creat-react-app que traz configurado o serviceWorker para trabalhar offline, porém não foi configurado para tratar as exceções nesta aplicação.

A aplicação sem o backend não irá renderizar nenhuma informações, então é necessário fazer primeiramente a configuração do projeto [https://github.com/fabiokiatkowski/java-todo-back]
