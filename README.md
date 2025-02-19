# Простое веб-приложение для поиска репозиториев GitHub

Это веб-приложение позволяет пользователям искать репозитории на GitHub по имени пользователя и отображать информацию о найденных репозиториях.

## Стек технологий

- **TypeScript**
- **React**
- **Redux Toolkit & RTK Query**
- **Tailwind CSS**

---

## Техническое задание

### Функциональные требования:

1. **Поиск репозиториев:**

   - Пользователь может ввести имя пользователя GitHub в текстовое поле.
   - Поиск запускается автоматически при вводе текста.
   - Запросы к API GitHub должны быть оптимизированы для минимизации избыточных вызовов.

2. **Отображение информации о репозиториях:**

   - Для каждого найденного репозитория отображаются следующие данные:
     - Название репозитория.
     - Описание (если доступно).
     - Ссылка на репозиторий.
     - Количество звёзд (stars).
     - Дата последнего обновления.

3. **Индикатор загрузки:**

   - Во время ожидания ответа от API GitHub должен отображаться индикатор загрузки.

4. **Пагинация:**

   - Реализована бесконечная прокрутка с шагом 20 элементов.
   - Запрос за следующей страницей данных выполняется при прокрутке экрана вниз.

5. **Обработка ошибок:**

   - Если пользователь вводит некорректное имя или возникают ошибки при запросе к API, отображается понятное сообщение об ошибке.

6. **Контейнеризация с использованием Docker:**

   - Приложение упаковано в Docker-контейнер для обеспечения переносимости и удобства развертывания.
   - В комплекте с проектом предоставлен `docker-compose.yml` файл для упрощения запуска приложения и его зависимостей.

7. **Тестирование:**

   - Unit-тесты запросов к API проверяют:
     - Корректность формирования запросов к API.
     - Обработку успешных ответов от API.
     - Обработку ошибок.

---

## Тестирование

Для тестирования использовалась библиотека **Jest**. Были написаны **юнит-тесты** для проверки ключевых функций, включая:

- Формирование корректного URL при запросе к API GitHub.
- Обработку успешных ответов от API с возвратом ожидаемых данных, с использованием мокирования HTTP-запросов через `jest.mock()`.
- Обработку ошибок, например, сетевых сбоев или некорректных запросов.

Тесты позволяют убедиться, что приложение корректно взаимодействует с API и правильно обрабатывает ошибки.

---

## Запуск приложения

### Предварительные требования:

- Установленный [Docker](https://www.docker.com/).

### Шаги для запуска:

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/Leroyalle/github-repos-test-task.git
   ```
2. Перейдите в папку проекта:
   ```bash
   cd github-repos-test-task
   ```
3. Соберите и запустите приложение:
   ```bash
   docker compose up --build
   ```
4. Проект будет доступен на 8080 порту:
   ```bash
   http://localhost:8080
   ```
