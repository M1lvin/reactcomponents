import React from 'react';

export default function Topic({ title, children, done, onToggle }) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{children}</p>
      <button type="button" aria-pressed={done} onClick={onToggle}>
        {done ? 'Completed ✓' : 'Mark complete'}
      </button>
    </li>
  );
}
