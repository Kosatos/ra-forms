import React from 'react';
import PropsType from 'prop-types';
import styles from './index.module.css';
import StepItem from '../StepItem';

export default function StepsList({ steps, onRemove, onEdit }) {
  if (!steps.length) {
    return null;
  }
  return (
    <div className={styles.steps__wrapper}>
      <div className={styles.steps__header}>
        <span>Дата (ДД.ММ.ГГ)</span>
        <span>Пройдено км</span>
        <span>Действия</span>
      </div>
      <ul className={styles.steps__list}>
        {steps.map((step) => (
          <StepItem
            step={step}
            onRemove={onRemove}
            onEdit={onEdit}
            key={step.id}
          />
        ))}
      </ul>
    </div>
  );
}

StepsList.defaultProps = {
  steps: [],
};
StepsList.propTypes = {
  steps: PropsType.arrayOf(PropsType.object),
  onRemove: PropsType.func,
  onEdit: PropsType.func,
};
