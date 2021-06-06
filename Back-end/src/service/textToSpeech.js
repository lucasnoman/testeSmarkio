const fs = require('fs');
const path = require('path');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

let reqPath = path.join(__dirname, '../');

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: process.env.TEXT_TO_SPEECH_APIKEY,
  }),
  serviceUrl: process.env.TEXT_TO_SPEECH_URL,
});

const synthesize = (id, user_comments) => {
  const synthesizeParams = {
    text: user_comments,
    accept: 'audio/wav',
    voice: 'en-US_AllisonV3Voice',
  };

  textToSpeech
    .synthesize(synthesizeParams)
    .then(response => {
      // only necessary for wav formats,
      // otherwise `response.result` can be directly piped to a file
      return textToSpeech.repairWavHeaderStream(response.result);
    })
    .then(buffer => {
      fs.writeFileSync(reqPath + `/audio/${id}.wav`, buffer);
    })
    .catch(err => {
      console.log('error:', err);
    });
};

module.exports = synthesize;
