import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import shortid from 'shortid';
import PhotosList from '../PhotosList';
import styles from './index.module.css';
import fileToDataUrl from '../../../utils/fileToDataUrl';

export default function PhotoLoader() {
  const [files, setFiles] = useState([]);
  const fileRef = useRef();

  const handleSelect = async (evt) => {
    if (evt.target.files === null) return;
    const files = [...evt.target.files];
    const urls = await Promise.all(files.map((o) => fileToDataUrl(o)));
    const newFiles = urls.map((url) => ({ id: shortid.generate(), url: url }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleRemove = (id) => {
    setFiles((prevFiles) => prevFiles.filter((f) => f.id !== id));
  };

  console.log(files);

  return (
    <>
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
      <PhotosList files={files} onRemove={handleRemove} />
    </>
  );
}
