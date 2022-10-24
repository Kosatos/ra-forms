import React from 'react';
import { useState } from 'react';
import styles from './index.module.css';

export default function HexToRgb() {
  const [color, setColor] = useState('');

  function hexToRgb(hex) {
    if (hex.match('^#([A-Fa-f0-9]{6})$')) {
      const hexColor = hex.replace('#', ''),
        r = parseInt(hexColor.substring(0, 2), 16),
        g = parseInt(hexColor.substring(2, 4), 16),
        b = parseInt(hexColor.substring(4, 6), 16);

      return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
    return null;
  }

  const handleChange = (evt) => {
    evt.preventDefault();
    setColor(evt.target.value);
  };

  function getResult() {
    if (color.length >= 7) {
      const result = hexToRgb(color);
      return result ? result : 'Ошибка!';
    }
    return;
  }

  return (
    <div
      className={styles.converter}
      style={{
        backgroundColor: getResult() === 'Ошибка!' ? 'red' : getResult(),
      }}
    >
      <form className={styles.converter__form}>
        <input
          type="text"
          value={color}
          onChange={handleChange}
          className={styles.converter__input}
        />
      </form>
      <p className={styles.converter__result}>{getResult()}</p>
    </div>
  );
}
