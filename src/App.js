import React, {useEffect, useState} from 'react';
import { Button, FormControl, InputLabel, Input} from '@mui/material/Button';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from './firebase';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))

    });

  }, [] )



  useEffect(() => {
    // const username = prompt('Please enter your name');
    setUsername(prompt('Please enter your name'));

  }, [] )


  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput('');

  }


  return (
    <div className="App">
      <h1>Hello Batuhan</h1>
      <h2>Welcome {username} </h2>

      <form>
      <formControl>
        <inputLabel>Enter a message...</inputLabel>
        <input value={input} onChange={event => setInput(event.target.value)} />
        <button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage} >Send Message</button>

      </formControl>
      </form>

      {
        messages.map(message => (
          <Message username={username} message={message} />
          
        ))
      }
    </div>
  );
}

export default App;


