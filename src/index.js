// These must be the first lines in src/index.js
// Ref: https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';

import { QUESTIONS, TOPICS, RESULTTYPES } from './docs/data'; //load from docs/data.js
import CSV from './docs/csv'; //load from docs/csv.json

import 'normalize.css';
import './index.scss';

import DataBook from './components/DataBook';

// ========================================

ReactDOM.render(
    <DataBook
        questions={QUESTIONS}
        topics={TOPICS}
        resulttypes={RESULTTYPES}
        csv={CSV}
    />,
    document.getElementById('databookApp')
);