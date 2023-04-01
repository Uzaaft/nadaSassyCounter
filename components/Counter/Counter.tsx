// TODO:
// Fetches the current count from the server.
// The server is expected to return a JSON object with a "count" property.

import React, { useState, useEffect } from 'react';
import { Box, UnstyledButton } from '@mantine/core';
import RoundButton from '../RoundButton/RoundButton';
import { Click } from '../../types/dataTypes';

/** Counter that increments by one.
 * @returns {JSX.Element} The Counter component.
 */
export default function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    let click: Click = {
      time: new Date(),
    };
    fetch('/api/clicks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(click),
    });
    setCount(count + 1);
  };

  useEffect(() => {
    fetch('/api/clicks')
      .then((res) => res.json())
      .then((data) => {
        console.log('Data:', data);
      });
  }, []);
  return (
    <Box>
      <RoundButton
        onClick={handleClick}
        sx={{
          backgroundColor: 'green',
        }}
      />
      <p>
        Current count: <strong>{count}</strong>
      </p>
    </Box>
  );
}
