import React, { useState, useEffect } from 'react';
import './style.css';
import Outside from './Outside.js';
import MyDiv from './Mydiv.js';

export default function App() {
  return (
    <div>
      <Outside>
        <MyDiv message={'This is inside wrapper'} />
      </Outside>
      <MyDiv message={'This is ouside wrapper'} />
    </div>
  );
}
