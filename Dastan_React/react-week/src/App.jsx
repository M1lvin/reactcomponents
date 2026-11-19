import React, { useState } from 'react';
import Topic from './components/Topic';
import initialTopics from './topics';

export default function App() {
  const [topics, setTopics] = useState(initialTopics);
  const [checked, setChecked] = useState([]);
  const [draft, setDraft] = useState('');

  function toggle(id) {
    setChecked(previous => previous.includes(id)
      ? previous.filter(item => item !== id)
      : [...previous, id]);
  }

  function addTopic(event) {
    event.preventDefault();
    const title = draft.trim();
    if (!title) return;
    setTopics(previous => [...previous, {
      id: previous[previous.length - 1].id + 1,
      title,
      explanation: 'Personal study topic'
    }]);
    setDraft('');
  }

  return (
    <main>
      <header>
        <p>Дастан Эгембергенов</p>
        <h1>My React study week</h1>
        <p aria-live="polite">{checked.length} of {topics.length} topics completed</p>
        <progress aria-label="Study progress" value={checked.length} max={topics.length} />
        {checked.length === topics.length && <p>All topics completed!</p>}
      </header>
      <ol>
        {topics.map(topic => (
          <Topic key={topic.id} title={topic.title} done={checked.includes(topic.id)}
            onToggle={() => toggle(topic.id)}>
            {topic.explanation}
          </Topic>
        ))}
      </ol>
      <form onSubmit={addTopic}>
        <label htmlFor="topic">My next study topic</label>
        <input id="topic" value={draft} onChange={event => setDraft(event.target.value)} />
        <button disabled={!draft.trim()}>Add topic</button>
      </form>
    </main>
  );
}
