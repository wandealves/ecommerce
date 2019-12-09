<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>


## Description

Projeto utilizando o [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository. Os testes realizados foram os leveis 1, 2 e 3. https://bitbucket.org/lixao/tech-interview/src/master/backend/

## Instalação

```bash
$ npm install
```

## Executar a app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Obter resultados

Para obter as saídas dos testes chame a API, essa pode receber qualquer JSON dios teste e de acordo com a entreda realiza os calculos:

- POTS [base_url]/api/stores

Level 1

Body:

```json
{
  "articles": [
    { "id": 1, "name": "water", "price": 100 },
    { "id": 2, "name": "honey", "price": 200 },
    { "id": 3, "name": "mango", "price": 400 },
    { "id": 4, "name": "tea", "price": 1000 }
  ],
  "carts": [
    {
      "id": 1,
      "items": [
        { "article_id": 1, "quantity": 6 },
        { "article_id": 2, "quantity": 2 },
        { "article_id": 4, "quantity": 1 }
      ]
    },
    {
      "id": 2,
      "items": [
        { "article_id": 2, "quantity": 1 },
        { "article_id": 3, "quantity": 3 }
      ]
    },
    {
      "id": 3,
      "items": []
    }
  ]
}
```

Level 2

Body:

```json
{
  "articles": [
    { "id": 1, "name": "water", "price": 100 },
    { "id": 2, "name": "honey", "price": 200 },
    { "id": 3, "name": "mango", "price": 400 },
    { "id": 4, "name": "tea", "price": 1000 }
  ],
  "carts": [
    {
      "id": 1,
      "items": [
        { "article_id": 1, "quantity": 6 },
        { "article_id": 2, "quantity": 2 },
        { "article_id": 4, "quantity": 1 }
      ]
    },
    {
      "id": 2,
      "items": [
        { "article_id": 2, "quantity": 1 },
        { "article_id": 3, "quantity": 3 }
      ]
    },
    {
      "id": 3,
      "items": []
    }
  ],
  "delivery_fees": [
    {
      "eligible_transaction_volume": {
        "min_price": 0,
        "max_price": 1000
      },
      "price": 800
    },
    {
      "eligible_transaction_volume": {
        "min_price": 1000,
        "max_price": 2000
      },
      "price": 400
    },
    {
      "eligible_transaction_volume": {
        "min_price": 2000,
        "max_price": null
      },
      "price": 0
    }
  ]
}
```
Level 3

Body:

```json
{
  "articles": [
    { "id": 1, "name": "water", "price": 100 },
    { "id": 2, "name": "honey", "price": 200 },
    { "id": 3, "name": "mango", "price": 400 },
    { "id": 4, "name": "tea", "price": 1000 },
    { "id": 5, "name": "ketchup", "price": 999 },
    { "id": 6, "name": "mayonnaise", "price": 999 },
    { "id": 7, "name": "fries", "price": 378 },
    { "id": 8, "name": "ham", "price": 147 }
  ],
  "carts": [
    {
      "id": 1,
      "items": [
        { "article_id": 1, "quantity": 6 },
        { "article_id": 2, "quantity": 2 },
        { "article_id": 4, "quantity": 1 }
      ]
    },
    {
      "id": 2,
      "items": [
        { "article_id": 2, "quantity": 1 },
        { "article_id": 3, "quantity": 3 }
      ]
    },
    {
      "id": 3,
      "items": [
        { "article_id": 5, "quantity": 1 },
        { "article_id": 6, "quantity": 1 }
      ]
    },
    {
      "id": 4,
      "items": [
        { "article_id": 7, "quantity": 1 }
      ]
    },
    {
      "id": 5,
      "items": [
        { "article_id": 8, "quantity": 3 }
      ]
    }
  ],
  "delivery_fees": [
    {
      "eligible_transaction_volume": {
        "min_price": 0,
        "max_price": 1000
      },
      "price": 800
    },
    {
      "eligible_transaction_volume": {
        "min_price": 1000,
        "max_price": 2000
      },
      "price": 400
    },
    {
      "eligible_transaction_volume": {
        "min_price": 2000,
        "max_price": null
      },
      "price": 0
    }
  ],
  "discounts": [
    { "article_id": 2, "type": "amount", "value": 25 },
    { "article_id": 5, "type": "percentage", "value": 30 },
    { "article_id": 6, "type": "percentage", "value": 30 },
    { "article_id": 7, "type": "percentage", "value": 25 },
    { "article_id": 8, "type": "percentage", "value": 10 }
  ]
}
```

## Stay in touch

- Autor - [github](https://github.com/wandealves/)

## License

  Nest is [MIT licensed](LICENSE).
