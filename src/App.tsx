import React, { useState } from 'react';
import DiaryList from './components/DiaryList';
import EntryForm from './components/EntryForm';
import './styles/App.scss';

const App: React.FC = () => {
  const [entries, setEntries] = useState<{ date: string; content: string }[]>([]);

  const addEntry = (entry: { date: string; content: string }) => {
    setEntries([entry, ...entries]);
  };

  return (
    <div className="App">
      <h1>My Diary</h1>
      <EntryForm addEntry={addEntry} />
      <DiaryList entries={entries} />
    </div>
  );
};

export default App;
