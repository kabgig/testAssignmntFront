# DiveSea - NFT Marketplace

## Инструкция по запуску

### Требования

- Node.js 20.x или выше
- npm или yarn
- Docker (опционально, для запуска в контейнере)

### Запуск в режиме разработки

1. **Клонируйте репозиторий**
   ```bash
   git clone <url-репозитория>
   cd testfrontendassignment
   ```

2. **Установите зависимости**
   ```bash
   npm install
   ```

3. **Запустите сервер разработки**
   ```bash
   npm run dev
   ```

4. **Откройте браузер**
   Перейдите по адресу [http://localhost:3000](http://localhost:3000)

### Запуск production сборки

1. **Создайте production сборку**
   ```bash
   npm run build
   ```

2. **Запустите production сервер**
   ```bash
   node .next/standalone/server.js
   ```

3. **Откройте браузер**
   Перейдите по адресу [http://localhost:3000](http://localhost:3000)

### Запуск с помощью Docker

1. **Соберите Docker образ**
   ```bash
   docker build -t divesea-nft .
   ```

2. **Запустите контейнер**
   ```bash
   docker run -p 3000:3000 divesea-nft
   ```

3. **Откройте браузер**
   Перейдите по адресу [http://localhost:3000](http://localhost:3000)

4. **Остановка и удаление контейнера**
   
   Посмотреть запущенные контейнеры:
   ```bash
   docker ps
   ```
   
   Остановить контейнер:
   ```bash
   docker stop <container_id или container_name>
   ```
   
   Удалить контейнер:
   ```bash
   docker rm <container_id или container_name>
   ```
   
   Удалить образ (опционально):
   ```bash
   docker rmi divesea-nft
   ```

### Доступные команды

- `npm run dev` - Запуск сервера разработки
- `npm run build` - Создание production сборки
- `npm run lint` - Проверка кода с помощью ESLint

### Примечание

Если порт 3000 уже занят, вы можете указать другой порт:
```bash
PORT=3001 npm run dev
```
