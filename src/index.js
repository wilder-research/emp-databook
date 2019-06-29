// These must be the first lines in src/index.js
// Ref: https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';

import DataBook from './DataBook';
import { QUESTIONS, TOPICS, RESULTTYPES } from './docs/data';
import './index.css';

let CSV = require('./docs/csv.json');

// ========================================

ReactDOM.render(
    <DataBook
        questions={QUESTIONS}
        topics={TOPICS}
        resulttypes={RESULTTYPES}
        csv={CSV}
    />,
    document.getElementById('databook')
);
