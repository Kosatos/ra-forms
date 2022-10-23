import React from 'react';
import { useState } from 'react';
import shortid from 'shortid';
import PhotosList from '../PhotosList';
import PhotoLoaderForm from '../PhotoLoaderForm';
import styles from './index.module.css';

export default function PhotoLoader() {
  const [files, setFiles] = useState([]);

  const handleUpdate = (urls) => {
    const newFiles = urls.map((url) => ({ id: shortid.generate(), url: url }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleRemove = (id) => {
    setFiles((prevFiles) => prevFiles.filter((f) => f.id !== id));
  };

  return (
    <div className={styles['photo-loader']}>
      <PhotoLoaderForm onUpdate={handleUpdate} />
      <PhotosList files={files} onRemove={handleRemove} />
    </div>
  );
}
