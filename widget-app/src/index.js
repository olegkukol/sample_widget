import React from 'react';
import ReactDOM from 'react-dom';
import TestWidget from './TestWidget';

window.ReactTestWidget = {
    mount: (containerId) => {
        const el = document.getElementById(containerId);
        ReactDOM.render(<TestWidget />, el);
    },
    unmount: (containerId) => {
        const el = document.getElementById(containerId);
        ReactDOM.unmountComponentAtNode(el);
    }
}