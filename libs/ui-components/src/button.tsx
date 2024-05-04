import React from 'react';

export type ButtonProps = {
    color: string;
}

export const Button = ({color}: ButtonProps) => {
  return (
    <button style={{ backgroundColor: color }}>
      Click me
    </button>
  );
};