@echo off
cd /d %~dp0
echo Удаляем node_modules (если нужно)...
if exist node_modules (
  echo Папка node_modules уже существует — пропускаем установку зависимостей
) else (
  echo Устанавливаем зависимости...
  npm install
)
echo Запускаем проект...
npm start
pause