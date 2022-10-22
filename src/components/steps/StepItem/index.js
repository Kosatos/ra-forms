import React from 'react';
import PropsType from 'prop-types';
import styles from './index.module.css';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';

export default function StepItem({ step, onRemove, onEdit }) {
  return (
    <li className={styles.step}>
      <span>{step.date.format('DD.MM.YYYY')}</span>
      <span>{step.distance.toFixed(1)}</span>
      <div className={styles.step__controllers}>
        <div className={styles.step__icon} onClick={() => onEdit(step)}>
          <EditIcon />
        </div>
        <div className={styles.step__icon} onClick={() => onRemove(step.id)}>
          <CloseIcon />
        </div>
      </div>
    </li>
  );
}

StepItem.propTypes = {
  step: PropsType.shape({
    id: PropsType.string,
    date: PropsType.object,
    distance: PropsType.number,
  }),
};
