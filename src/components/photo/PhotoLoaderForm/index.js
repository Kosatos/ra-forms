import React from 'react';
import { useRef } from 'react';
import PropsType from 'prop-types';
import styles from './index.module.css';
import fileToDataUrl from '../../../utils/fileToDataUrl';

export default function PhotoLoaderForm({ onUpdate }) {
  const fileRef = useRef();

  const handleSelect = async (evt) => {
    if (evt.target.files === null) return;
    const files = [...evt.target.files];
    const urls = await Promise.all(files.map((o) => fileToDataUrl(o)));
    onUpdate(urls);
    evt.target.value = '';
  };

  return (
    <div className={styles['upload-form']}>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleSelect}
        ref={fileRef}
      />
      <div className={styles['upload-form__wrapper']}>Click to select</div>
    </div>
  );
}

PhotoLoaderForm.propTypes = {
  onUpdate: PropsType.func,
};
