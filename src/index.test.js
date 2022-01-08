import React from 'react';
import ReactDOM from 'react-dom';

import DataBook from './components/DataBook';
import { QUESTIONS, TOPICS, RESULTTYPES, DATAYEARS } from './docs/data'; // docs/data.js
import CSV2018 from './docs/csv-2018'; // docs/csv-2018.json
import CSV2021 from './docs/csv-2021'; // docs/csv-2021.json

//simple whole app smoke test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <DataBook
      questions={QUESTIONS}
      topics={TOPICS}
      resulttypes={RESULTTYPES}
      datayears={DATAYEARS}
      csv2018={CSV2018}
      csv2021={CSV2021}
/>, div);
});
