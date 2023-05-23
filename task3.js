import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save the input value to MongoDB
    axios.post('/api/saveResult', { input: inputValue })
      .then((response) => {
        // Update the results state with the saved result
        setResults([...results, response.data]);
      })
      .catch((error) => {
        console.error('Error saving result:', error);
      });

    // Clear the input field
    setInputValue('');
  };

  return (
    <div>
      <h1>Results</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Save Result</button>
      </form>
      <ul>
        {results.map((result) => (
          <li key={result._id}>{result.input}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
