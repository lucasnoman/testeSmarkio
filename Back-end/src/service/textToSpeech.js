const fs = require("fs");
const TextToSpeechV1 = require("ibm-watson/text-to-speech/v1");
const { IamAuthenticator } = require("ibm-watson/auth");

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: process.env.TEXT_TO_SPEECH_APIKEY,
  }),
  serviceUrl: process.env.TEXT_TO_SPEECH_URL,
});

const synthesize = (id, user_comments) => {
  const obj = {
    id,
    user_comments,
  };

  const synthesizeParams = {
    text: obj.user_comments,
    accept: "audio/wav",
    voice: "en-US_AllisonV3Voice",
  };

  textToSpeech
    .synthesize(synthesizeParams)
    .then((response) => {
      // only necessary for wav formats,
      // otherwise `response.result` can be directly piped to a file
      return textToSpeech.repairWavHeaderStream(response.result);
    })
    .then((buffer) => {
      fs.writeFileSync(`../audio/${obj.id}.wav`, buffer);
    })
    .catch((err) => {
      console.log("error:", err);
    });

  console.log(obj);
};

module.exports = synthesize;
