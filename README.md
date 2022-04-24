# Тестовое задание для Profilance Group

Упрощенные требования к заданию:

- Две страницы (главная/новости), попап для входа/выхода
- Два пользователя (админ/пользователь), гость (неавторизованный), без серверной части
- Ошибка при неправильном логине/пароле, индикация ошибки
- Возможность для пользователя добавлять новости
- Возможность ддя админа одобрить/удалить новость
- Возможность для гостя просматривать одобренные новости
- Отображение списка новостей для десктопа в 2 колонки, для мобилок в 1
- Поиск по новостям (сразу при вводе текста)

Требования к стеку:

- JS, React, Redux, SCSS, верстка по БЭМ

Ряд вещей упрощен (например, нет компонентов для элементов формы; нет валидации форм, нет оптимизаций по ререндерам, т.к. требования этого не включали).

Ряд вещей вызывал вопросы (например, необходимость проверок на граничные значения, должен ли поиск осуществляться по тексту или заголовку и т. д.). В этих случаях реализовано так, как я посчитал нужным.

Все коммиты засквошены в один.

## Логины/пароли пользователей

Админ

```sh
login: admin
password: admin123
```

Пользователь

```sh
login: user
password: user123
```

## Установка

```sh
yarn install
```

## Запуск

```sh
yarn start
```

Адрес/порт дев сервера

```sh
127.0.0.1:8080
```

## Сборка

```sh
yarn build
```

Результат сборки кладется в /dist/. Не тестировалось, но должно работать.
