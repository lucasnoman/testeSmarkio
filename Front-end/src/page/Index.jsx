import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import api from '../services/api.js';
require('dotenv').config();

const Index = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    id: uuidv4(),
    comment: '',
  });

  useEffect(() => {
    api
      .get('comments')
      .then(response => setComments(response.data))
      // .then(response => console.log(response.data))
      .catch(error => console.error('Ocorreu um erro: ' + error));
  }, [comments]);

  const updateField = e => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value }); // chave: valor
  };

  const handleSubmit = e => {
    e.preventDefault();

    const comment = {
      id: newComment.id,
      user_comments: newComment.comment,
    };

    api.post('comments', comment).catch(err => console.warn(err));
  };

  const handleSynthesize = item => {
    // console.log(item);
    const audio = document.querySelector('audio');
    audio.src = `${process.env.REACT_APP_BACKEND_URL}/audio/${item.id}.wav`;
    audio.play();
  };

  const handlePauseAudio = item => {
    const audio = document.querySelector('audio');
    audio.src = `${process.env.REACT_APP_BACKEND_URL}/audio/${item.id}.wav`;
    audio.pause();
  };

  return (
    <main className="layout">
      <section className="layout__comments-input">
        <h2>Comentário</h2>
        <form className="layout__form" action="submit" onSubmit={handleSubmit}>
          <textarea
            rows="10"
            id="comment-entry"
            value={newComment.comment} // valor
            name="comment" // chave
            onChange={updateField}
          ></textarea>

          <button type="submit" className="layout__form__register">
            Cadastrar
          </button>
        </form>
      </section>

      <div className="layout__vertical-line"></div>

      <section className="layout__comments-list">
        <h2>Comentários</h2>
        {comments.map(comment => (
          <div key={comment.id}>
            <audio>
              <source
                src={`${process.env.REACT_APP_BACKEND_URL}/audio/${comment.id}.wav`}
                type="audio/wav"
              />
            </audio>
            <span>{comment.user_comments}</span>
            <button
              style={{ margin: 8 }}
              onClick={() => handleSynthesize(comment)}
            >
              Ouvir
            </button>
            <button
              style={{ margin: 8 }}
              onClick={() => handlePauseAudio(comment)}
            >
              Pausar
            </button>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Index;
