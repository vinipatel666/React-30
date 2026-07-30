import { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    
    // Calculate word count
    // Split the text by one or more spaces, and filter out empty strings
    const words = newText.trim().split(/\s+/).filter(word => word.length > 0); //newText.trim() removes whitespace from both ends of the string
    //(/\s+/) is a regular expression that matches one or more whitespace characters
    //filter(word => word.length > 0) removes any empty strings from the array
    setWordCount(words.length);
  };

  return (
    <div>
      <textarea
        rows="10"
        cols="50"
        value={text}
        onChange={handleTextChange}
        placeholder="Type your text here..."
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default WordCounter;
