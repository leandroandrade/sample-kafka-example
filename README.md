# kafka example

## Descrição

Repositório do Apache Kafka (Mensageria)

**Importante**: Roda-lo antes de qualquer apliação

## Configurar /etc/hosts

A comunicação entre as aplicações se dá de forma direta através da rede da máquina.
Para isto é necessário configurar um endereços que todos os containers Docker consigam acessar.

Acrescente no seu /etc/hosts (para Windows o caminho é C:\Windows\system32\drivers\etc\hosts):
```
127.0.0.1 host.docker.internal
```
Em todos os sistemas operacionais é necessário abrir o programa para editar o *hosts* como Administrator da máquina ou root.

## Rodar o ambiente da aplicação

Execute o comando:

```
docker-compose up
```
***Importante***: Toda vez que para-lo de rodar, rode ```docker-compose down``` para destruir os volumes, senão ao rodar um UP novamente dará erro

## Acesso control center

Acesse o endereço: ```http://localhost:9021/```


## Typescript

Executar producer:
```shell
npx ts-node producer-type.ts
```

Executar consumer:
```shell
npx ts-node consumer-type.ts
```