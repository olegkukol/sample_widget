import React from 'react';
import ReactDOM from 'react-dom';
import TestWidget from './components/test-widget';

const app = (<TestWidget />);

window.ReactTestWidget = {
    mount: (containerId) => {
        const el = document.getElementById(containerId);
        ReactDOM.render(app, el);
    },
    unmount: (containerId) => {
        const el = document.getElementById(containerId);
        ReactDOM.unmountComponentAtNode(el);
    }
};