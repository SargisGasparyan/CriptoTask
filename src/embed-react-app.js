const containerId = "my-embeddable-app-container";

// Создайте контейнер для вашего приложения
const container = document.createElement("div");
container.id = containerId;

// Добавьте контейнер в тело веб-сайта хоста
document.body.appendChild(container);

// Загрузите скомпилированный файл JavaScript
const script = document.createElement("script");
script.src = "./embed-react-app.js";
script.async = true;

// Присоедините обратный вызов для выполнения после загрузки скрипта
script.onload = () => {
  // Рендеринг вашего React-приложения внутри контейнера
  window.MyEmbeddableApp.init(containerId);
};

// Добавьте скрипт в тело веб-сайта хоста
document.body.appendChild(script);

const styleSheet = document.createElement("link");
styleSheet.rel = "stylesheet";
styleSheet.type = "text/css";
styleSheet.href = "./embed-react-app.css";

// Добавьте стили в head текущей страницы
document.head.appendChild(styleSheet);
