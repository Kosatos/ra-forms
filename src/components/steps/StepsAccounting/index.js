import React from 'react';
import { useState } from 'react';
import shortid from 'shortid';
import moment from 'moment';
import AddStepForm from '../AddStepForm';
import StepsList from '../StepsList';
import styles from './index.module.css';

export default function StepsAccounting() {
  const [steps, setSteps] = useState([]);
  const [form, setForm] = useState({
    date: '',
    distance: '',
    edit: false,
    id: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (form.edit) {
      const index = steps.findIndex((s) => s.id === form.id);
      setSteps((prevSteps) => {
        prevSteps[index].date = moment(form.date);
        prevSteps[index].distance = +form.distance;
        return [...prevSteps];
      });
      setForm({ date: '', distance: '', edit: false, id: '' });
      return;
    }
    const newStep = {
      id: shortid.generate(),
      date: moment(form.date),
      distance: +form.distance,
    };
    handleAddStep(newStep);
    setForm({ date: '', distance: '', edit: false, id: '' });
  };

  const handleAddStep = (step) => {
    const isSameDate = steps.some(
      (s) => s.date.format('L') === step.date.format('L')
    );
    if (isSameDate) {
      return setSteps((prevSteps) => {
        return prevSteps.map((s) => {
          if (s.date.format('L') === step.date.format('L')) {
            const totalDistance = s.distance + step.distance;
            return { ...s, distance: totalDistance };
          }
          return s;
        });
      });
    }
    setSteps((prevSteps) =>
      [...prevSteps, step].sort((a, b) => b.date - a.date)
    );
  };

  const handleRemoveStep = (id) => {
    setSteps((prevSteps) => prevSteps.filter((s) => s.id !== id));
  };

  const handleEditStep = ({ id, date, distance }) => {
    setForm({
      date: date.format('YYYY-MM-DD'),
      distance: `${distance}`,
      edit: true,
      id: id,
    });
  };

  return (
    <div className={styles.accounting}>
      <AddStepForm
        values={form}
        onChangeInput={handleChange}
        onSubmitForm={handleSubmit}
      />
      <StepsList
        steps={steps}
        onRemove={handleRemoveStep}
        onEdit={handleEditStep}
      />
    </div>
  );
}
