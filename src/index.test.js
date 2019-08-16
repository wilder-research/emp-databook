import React from 'react';
import ReactDOM from 'react-dom';

import DataBook from './databook';
import { QUESTIONS, TOPICS, RESULTTYPES } from './docs/data';

//simple whole app smoke test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <DataBook
      questions={QUESTIONS}
      topics={TOPICS}
      resulttypes={RESULTTYPES}
      csv={CSV}
/>, div);
});
