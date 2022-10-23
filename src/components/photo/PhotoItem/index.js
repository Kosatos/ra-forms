import React from 'react';
import PropsType from 'prop-types';
import styles from './index.module.css';
import CancelIcon from '@mui/icons-material/Cancel';

export default function PhotoItem({ file, onRemove }) {
  return (
    <li className={styles.photo}>
      <img src={file.url} alt={file.id} />
      <div className={styles.photo__remove} onClick={() => onRemove(file.id)}>
        <CancelIcon fontSize="large" />
      </div>
    </li>
  );
}

PhotoItem.propTypes = {
  file: PropsType.shape({
    id: PropsType.string,
    url: PropsType.string,
  }),
  onRemove: PropsType.func,
};
