### `1) widget-app - встраиваемое приложение в виде виджета. Сборка билда:`

```bash
cd widget-app
npm build
```

### `2) main-app - основное приложения для встраивания виджета. Запуск приложения:`

```bash
cd main-app
npm start
```

## `3) Использование:`
```
const widgetContainer = document.createElement('div');
widgetContainer.id = 'widget-app';
document.getElementsByClassName('App')[0].appendChild(widgetContainer);
window.ReactTestWidget.mount('widget-app');
```
