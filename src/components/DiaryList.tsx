import React from 'react';
import DiaryEntry from './DiaryEntry';
import styles from '../styles/DiaryList.module.scss';

interface DiaryListProps {
  entries: {
    date: string;
    content: string;
  }[];
}

const DiaryList: React.FC<DiaryListProps> = ({ entries }) => {
  return (
    <div className={styles.list}>
      {entries.map((entry, index) => (
        <DiaryEntry key={index} entry={entry} />
      ))}
    </div>
  );
};

export default DiaryList;
