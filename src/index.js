// Polyfills for IE11 (Promise, window.fetch, Object.assign, Symbol, Array.from)
// These 2 polyfill imports must be the first lines in src/index.js
// Ref: https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

// Normalize CSS
import 'normalize.css';
// Main SCSS for app layout; contains all other SCSS imports
import './index.scss';

// React
import React from 'react';
import ReactDOM from 'react-dom';

// Load the data files
import { QUESTIONS, TOPICS, RESULTTYPES } from './docs/data'; // docs/data.js
import CSV2018 from './docs/csv-2018'; // docs/csv-2018.json
import CSV2021 from './docs/csv-2021'; // docs/csv-2021.json

// Main app component
import DataBook from './components/DataBook';

// Render main app component to page at: id="databookApp"
ReactDOM.render(
    <DataBook
        questions={QUESTIONS}
        topics={TOPICS}
        resulttypes={RESULTTYPES}
        csv2018={CSV2018}
        csv2021={CSV2021}
    />,
    document.getElementById('databookApp')
);