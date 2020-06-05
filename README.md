### `1) main-app - основное приложения для встраивания виджета. Билд основного приложения:`

```bash
cd widget-app
npm build
```

### `2) widget-app - встраиваемое приложение в виде виджета. Сборка его билда и перенос в билд основного:`

```bash
cd ..
cd widget-app
npm build-move
```

## `3) Использование:`
`Перейти в main-app/build/static и запустить index.html. В консоли выполнить:`
```
window.ReactTestWidget.mount('widget');
```
