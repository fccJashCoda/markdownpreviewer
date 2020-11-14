import { useState } from 'react';

const Editor = ({ action, value }) => {
  return (
    <>
      <h2>editor</h2>
      <textarea value={value} onChange={(e) => action(e.target.value)} />
    </>
  );
};

export default Editor;
