import React, { useEffect, useState } from 'react';
import fs from 'fs';

import api from '../services/api.js';
import textToSpeech from '../services/ibm.js';

import Button from '../Components/Button';

const Index = props => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    api
      .get('comments')
      .then(response => setComments(response.data))
      .catch(error => {
        console.error('Ocorreu um erro: ' + error);
      });
  });

  const synthesizeParams = {
    text: 'Hello world',
    accept: 'audio/wav',
    voice: 'pt-BR_IsabelaVoice',
  };

  function teste() {
    textToSpeech
      .synthesize(synthesizeParams)
      .then(response => {
        // only necessary for wav formats,
        // otherwise `response.result` can be directly piped to a file
        return textToSpeech.repairWavHeaderStream(response.result);
      })
      .then(buffer => {
        fs.writeFileSync('hello_world.wav', buffer);
      })
      .catch(err => {
        // console.log('error: ', err);
      });
  }

  return (
    <>
      <main>
        <section className='commentInput'>
          <form className='forms' action='submit'>
            <h3>Comentário</h3>
            <textarea name='' id='' cols='30' rows='10'></textarea>
            <Button>Cadastrar</Button>
          </form>
        </section>

        <div className='verticalLine'></div>

        <section className='commentList'>
          <h3>Comentários</h3>
          {comments.map(comment => (
            <>
              <span key={comment.id}>{comment.user_comments}</span>
              <button
                key={comment.user_comments}
                style={{ margin: 8 }}
                onClick={teste()}
              >
                Ouvir
              </button>
              <br />
            </>
          ))}
        </section>
      </main>
    </>
  );
};

export default Index;
