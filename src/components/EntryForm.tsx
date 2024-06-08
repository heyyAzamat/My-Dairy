import React, { useState } from 'react';
import styles from '../styles/EntryForm.module.scss';

interface EntryFormProps {
  addEntry: (entry: { date: string; content: string }) => void;
}

const EntryForm: React.FC<EntryFormProps> = ({ addEntry }) => {
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEntry({ date, content });
    setDate('');
    setContent('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your diary entry here..."
        required
      />
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default EntryForm;
