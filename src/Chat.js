// // // import React, { useState, useEffect } from 'react';
// // // import { collection, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
// // // import { auth, firestore } from './firebase';

// // // function Chat() {
// // //   const messagesCollection = collection(firestore, 'messages');
// // //   const [messages, setMessages] = useState([]);
// // //   const [newMessage, setNewMessage] = useState('');

// // //   useEffect(() => {
// // //     const unsubscribe = onSnapshot(messagesCollection, (snapshot) => {
// // //       setMessages(snapshot.docs.map((doc) => doc.data()));
// // //       scrollToBottom();
// // //     });

// // //     return () => unsubscribe();
// // //   }, [messagesCollection]);

// // //   const scrollToBottom = () => {
// // //     const messagesContainer = document.getElementById('messages-container');
// // //     if (messagesContainer) {
// // //       messagesContainer.scrollTop = messagesContainer.scrollHeight;
// // //     }
// // //   };

// // //   const sendMessage = async () => {
// // //     if (newMessage.trim() !== '') {
// // //       await addDoc(messagesCollection, {
// // //         user: auth.currentUser.displayName,
// // //         timestamp: serverTimestamp(),
// // //         text: newMessage,
// // //       });
// // //       setNewMessage('');
// // //     }
// // //   };

// // //   return (
// // //     <div className="chat-container">
// // //       <div id="messages-container" className="messages">
// // //         {messages.map((message, index) => (
// // //           <div key={index} className="message">
// // //             <div className="user">{message.user}</div>
// // //             <div className="timestamp">
// // //               {message.timestamp && message.timestamp.toDate().toLocaleString()}
// // //             </div>
// // //             {message.text && <div className="text">{message.text}</div>}
// // //           </div>
// // //         ))}
// // //       </div>

// // //       <div className="input-box">
// // //         <input
// // //           type="text"
// // //           className="message-input"
// // //           placeholder="Type your message..."
// // //           value={newMessage}
// // //           onChange={(e) => setNewMessage(e.target.value)}
// // //         />
// // //         <button className="send-button" onClick={sendMessage}>
// // //           Send
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Chat;
// // // Chat.js
// // import React, { useState, useEffect } from 'react';
// // import { collection, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
// // import { auth, firestore } from './firebase';

// // function Chat() {
// //   const messagesCollection = collection(firestore, 'messages');
// //   const [messages, setMessages] = useState([]);
// //   const [newMessage, setNewMessage] = useState('');

// //   useEffect(() => {
// //     const unsubscribe = onSnapshot(messagesCollection, (snapshot) => {
// //       setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
// //     });

// //     // Retrieve messages from local storage on component mount
// //     const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
// //     setMessages(storedMessages);

// //     return () => unsubscribe();
// //   }, [messagesCollection]);

// //   useEffect(() => {
// //     // Save messages to local storage whenever they change
// //     localStorage.setItem('chatMessages', JSON.stringify(messages));
// //   }, [messages]);

// //   const sendMessage = async () => {
// //     if (newMessage.trim() !== '') {
// //       await addDoc(messagesCollection, {
// //         user: auth.currentUser.displayName,
// //         timestamp: serverTimestamp(),
// //         text: newMessage,
// //       });
// //       setNewMessage(''); // Clear the input box
// //     }
// //   };

// //   return (
// //     <div className="chat-container">
// //       <div className="messages">
// //         {messages.map((message) => (
// //           <div key={message.id} className="message">
// //             <div className="user">{message.user}</div>
// //             <div className="timestamp">{message.timestamp && message.timestamp.toDate().toLocaleString()}</div>
// //             {message.text && <div className="text">{message.text}</div>}
// //           </div>
// //         ))}
// //       </div>

// //       <div className="input-box">
// //         <input
// //           type="text"
// //           className="message-input"
// //           value={newMessage}
// //           onChange={(e) => setNewMessage(e.target.value)}
// //         />
// //         <button className="send-button" onClick={sendMessage}>Send</button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Chat;
// // Chat.js
// // import React, { useState, useEffect } from 'react';
// // import { collection, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
// // import { auth, firestore } from './firebase';

// // function Chat() {
// //   const messagesCollection = collection(firestore, 'messages');
// //   const [messages, setMessages] = useState([]);
// //   const [newMessage, setNewMessage] = useState('');

// //   useEffect(() => {
// //     const unsubscribe = onSnapshot(messagesCollection, (snapshot) => {
// //       setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
// //     });

// //     // Retrieve messages from local storage on component mount
// //     const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
// //     setMessages(storedMessages);

// //     return () => unsubscribe();
// //   }, [messagesCollection]);

// //   useEffect(() => {
// //     // Save messages to local storage whenever they change
// //     localStorage.setItem('chatMessages', JSON.stringify(messages));
// //   }, [messages]);

// //   const sendMessage = async () => {
// //     if (newMessage.trim() !== '') {
// //       await addDoc(messagesCollection, {
// //         user: auth.currentUser.displayName,
// //         timestamp: serverTimestamp(),
// //         text: newMessage,
// //       });
// //       setNewMessage(''); // Clear the input box
// //     }
// //   };

// //   return (
// //     <div className="chat-container">
// //       <div className="messages">
// //         {messages.map((message) => (
// //           <div key={message.id} className="message">
// //             <div className="user">{message.user}</div>
// //             <div className="timestamp">{message.timestamp && message.timestamp.toDate().toLocaleString()}</div>
// //             {message.text && <div className="text">{message.text}</div>}
// //           </div>
// //         ))}
// //       </div>

// //       <div className="input-box">
// //         <input
// //           type="text"
// //           className="message-input"
// //           value={newMessage}
// //           onChange={(e) => setNewMessage(e.target.value)}
// //         />
// //         <button className="send-button" onClick={sendMessage}>Send</button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Chat;
// // Chat.js
// // import React, { useState, useEffect } from 'react';
// // import { collection, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
// // import { auth, firestore } from './firebase';

// // function Chat() {
// //   const messagesCollection = collection(firestore, 'messages');
// //   const [messages, setMessages] = useState([]);
// //   const [newMessage, setNewMessage] = useState('');

// //   useEffect(() => {
// //     const unsubscribe = onSnapshot(messagesCollection, (snapshot) => {
// //       setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
// //     });

// //     // Retrieve messages from local storage on component mount
// //     const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
// //     setMessages(storedMessages);

// //     return () => unsubscribe();
// //   }, [messagesCollection]);

// //   useEffect(() => {
// //     // Save messages to local storage whenever they change
// //     localStorage.setItem('chatMessages', JSON.stringify(messages));
// //   }, [messages]);

// //   const sendMessage = async () => {
// //     if (newMessage.trim() !== '') {
// //       await addDoc(messagesCollection, {
// //         user: auth.currentUser.displayName,
// //         timestamp: serverTimestamp(),
// //         text: newMessage,
// //       });
// //       setNewMessage(''); // Clear the input box
// //     }
// //   };

// //   const signOut = () => {
// //     auth.signOut();
// //   };

// //   return (
// //     <div className="chat-container">
// //       <div className="user-info">
// //         <div className="username">{auth.currentUser.displayName}</div>
// //         <button className="sign-out-button" onClick={signOut}>Sign Out</button>
// //       </div>

// //       <div className="messages">
// //         {messages.map((message) => (
// //           <div key={message.id} className="message">
// //             <div className="user">{message.user}</div>
// //             <div className="timestamp">{message.timestamp && message.timestamp.toDate().toLocaleString()}</div>
// //             {message.text && <div className="text">{message.text}</div>}
// //           </div>
// //         ))}
// //       </div>

// //       <div className="input-box">
// //         <input
// //           type="text"
// //           className="message-input"
// //           value={newMessage}
// //           onChange={(e) => setNewMessage(e.target.value)}
// //         />
// //         <button className="send-button" onClick={sendMessage}>Send</button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Chat;
// // Chat.js
// import React, { useState, useEffect } from 'react';
// import { collection, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
// import { auth, firestore } from './firebase';

// function Chat() {
//   const messagesCollection = collection(firestore, 'messages');
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');

//   useEffect(() => {
//     const unsubscribe = onSnapshot(messagesCollection, (snapshot) => {
//       setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
//     });

//     // Retrieve messages from local storage on component mount
//     const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
//     setMessages(storedMessages);

//     return () => unsubscribe();
//   }, [messagesCollection]);

//   useEffect(() => {
//     // Save messages to local storage whenever they change
//     localStorage.setItem('chatMessages', JSON.stringify(messages));
//   }, [messages]);

//   const sendMessage = async () => {
//     if (newMessage.trim() !== '') {
//       await addDoc(messagesCollection, {
//         user: auth.currentUser.displayName,
//         timestamp: serverTimestamp(),
//         text: newMessage,
//       });
//       setNewMessage(''); // Clear the input box
//     }
//   };

//   const signOut = () => {
//     auth.signOut();
//   };

//   return (
//     <div className="chat-container">
//       {auth.currentUser ? (
//         <div className="user-info">
//           <div className="username">{auth.currentUser.displayName}</div>
//           <button className="sign-out-button" onClick={signOut}>Sign Out</button>
//         </div>
//       ) : (
//         <div className="user-info">
//           <div className="username">Guest</div>
//           {/* You can add a sign-in button or other authentication options here */}
//         </div>
//       )}

//       <div className="messages">
//         {messages.map((message) => (
//           <div key={message.id} className="message">
//             <div className="user">{message.user}</div>
//             <div className="timestamp">{message.timestamp && message.timestamp.toDate().toLocaleString()}</div>
//             {message.text && <div className="text">{message.text}</div>}
//           </div>
//         ))}
//       </div>

//       <div className="input-box">
//         <input
//           type="text"
//           className="message-input"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//         />
//         <button className="send-button" onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }

// export default Chat;

// Chat.js
// Chat.js
import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { auth, firestore } from './firebase';

function Chat() {
  const messagesCollection = collection(firestore, 'messages');
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(messagesCollection, (snapshot) => {
      const sortedMessages = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        .sort((a, b) => a.timestamp - b.timestamp);
      setMessages(sortedMessages);
    });

    return () => unsubscribe();
  }, [messagesCollection]);

  const sendMessage = async () => {
    if (newMessage.trim() !== '') {
      await addDoc(messagesCollection, {
        user: auth.currentUser.displayName || 'Guest',
        timestamp: serverTimestamp(),
        text: newMessage,
      });
      setNewMessage('');
    }
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <div className="chat-container">
      <div className="user-info">
        {auth.currentUser ? (
          <>
            <div className="username">{auth.currentUser.displayName}</div>
            <button className="sign-out-button" onClick={signOut}>Sign Out</button>
          </>
        ) : (
          <div className="username">Guest</div>
        )}
      </div>

      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <div className="user">{message.user}</div>
            <div className="timestamp">{message.timestamp && message.timestamp.toDate().toLocaleString()}</div>
            {message.text && <div className="text">{message.text}</div>}
          </div>
        ))}
      </div>

      <div className="input-box">
        <input
          type="text"
          className="message-input"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className="send-button" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
