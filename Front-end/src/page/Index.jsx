import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import api from '../services/api.js';
// import { synthesize } from '../services/textToSpeech.js';

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

  const handleSynthesize = ({ id, user_comments }) =>
    // synthesize({ id, user_comments });
    console.log(id, user_comments);

  return (
    <main className='layout'>
      <section className='layout__comments-input'>
        <h2>Comentário</h2>
        <form className='layout__form' action='submit' onSubmit={handleSubmit}>
          <textarea
            rows='10'
            id='comment-entry'
            value={newComment.comment} // valor
            name='comment' // chave
            onChange={updateField}
          ></textarea>

          <button type='submit' className='layout__form__register'>
            Cadastrar
          </button>
        </form>
      </section>

      <div className='layout__vertical-line'></div>

      <section className='layout__comments-list'>
        <h2>Comentários</h2>
        {comments.map(comment => (
          <div key={comment.id}>
            <span>{comment.user_comments}</span>
            <button
              style={{ margin: 8 }}
              onClick={() => handleSynthesize(comment)}
            >
              Ouvir
            </button>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Index;
