### `main-app - основное приложения для встраивания виджета`

```bash
cd main-app
npm install
npm start
```

### `widget-app - встраиваемое приложение в виде виджета`

```bash
cd widget-app
npm install
npm start
```

## `Использование`
```
const widgetContainer = document.createElement('div');
widgetContainer.id = 'widget-app';
document.getElementsByClassName('App')[0].appendChild(widgetContainer);
window.ReactTestWidget.mount('widget-app');
```