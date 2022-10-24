import React from 'react';
import PropsType from 'prop-types';
import styles from './index.module.css';

export default function AddStepForm({ onChangeInput, onSubmitForm, values }) {
  return (
    <form className={styles.form} onSubmit={onSubmitForm}>
      <div className={styles.form__input}>
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input
          type="date"
          name="date"
          id="date"
          value={values.date}
          onChange={onChangeInput}
          required
        />
      </div>
      <div className={styles.form__input}>
        <label htmlFor="distance">Пройдено км</label>
        <input
          type="number"
          name="distance"
          id="distance"
          value={values.distance}
          onChange={onChangeInput}
          required
        />
      </div>
      <button className={styles.form__btn}>ОК</button>
    </form>
  );
}

AddStepForm.propTypes = {
  onChangeInput: PropsType.func,
  onSubmitForm: PropsType.func,
  values: PropsType.shape({
    date: PropsType.string,
    distance: PropsType.string,
  }),
};
