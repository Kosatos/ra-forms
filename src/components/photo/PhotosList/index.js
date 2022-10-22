import React from 'react';
import PropsType from 'prop-types';
import PhotoItem from '../PhotoItem';
import styles from './index.module.css';

export default function PhotosList({ files, onRemove }) {
  if (!files.length) {
    return null;
  }
  return (
    <ul className={styles.photos}>
      {files.map((file) => (
        <PhotoItem file={file} onRemove={onRemove} key={file.id} />
      ))}
    </ul>
  );
}

PhotosList.propTypes = {
  files: PropsType.arrayOf(PropsType.object),
  onRemove: PropsType.func,
};
