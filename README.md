# fortune-game-app

# Развернуть фронт локально
<ul>
  <li>Склонируйте ветку <code>dev</code></li>
  <li><code>npm install</code></li>
  <li><code>npm start</code></li>
  <li>Откройте http://localhost:3000, чтобы просмотреть проект в браузере.</li>
  <li>Установите расширение Redux DevTools для браузера, помогает дебажить состояние приложения</li>
 </ul>
 
 # Билд проекта
 <ul>
  <li><code>npm run build</code></li>
  <li>Каталог билда, лежит в корне проекта (./build/)</li>
 </ul>

 # Демо проекта
 https://code-rnd.github.io/fortune-game-app/
 
 # Реализовано
 Игра “Память” <br>
 Поле 6х6. 18 парных карточек с различными иконками <br>
 При нажатии на кнопку “start” у выбранного игрока, запускается таймер <br>
 Карты, располагаются в случайном порядке <br>
 По нажатию на карточку она открывается <br>
 Если иконки на паре открытых карт совпадают они удаляются, если нет - пара открытых карт закрываются <br>
 Игра заканчивается когда все пары карт найдены. Таймер останавливается <br>
 Игроки расположены в порядке возрастания, в зависимости от своего рекорда по скорости выполнения задания <br>
 Если игроком устанавливается новый рекорд, то старый - перезаписывается <br>
