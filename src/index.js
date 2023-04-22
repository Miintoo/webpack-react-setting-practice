import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './components/Main.jsx';

const mainElement = document.querySelector('#root');
const root = createRoot(mainElement);

root.render(<Main />);
