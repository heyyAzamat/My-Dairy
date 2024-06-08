import React from 'react';
import styles from '../styles/DiaryEntry.module.scss';

interface DiaryEntryProps {
  entry: {
    date: string;
    content: string;
  };
}

const DiaryEntry: React.FC<DiaryEntryProps> = ({ entry }) => {
  const dateObject = new Date(entry.date);
  const formattedDate = dateObject.toISOString().split('T')[0];

  return (
    <div className={styles.entry}>
      <h3>{formattedDate}</h3>
      <p>{entry.content}</p>
    </div>
  );
};

export default DiaryEntry;
