//Project 22 - Textarea with Default Value
import './App.css';
export default function EditPost() {
  return (
    <label>
      Edit your post:
      <textarea
        name="text"
        defaultValue="I really enjoyed react project!"
        rows={4}
        cols={20}
      />
    </label>
  );
}

