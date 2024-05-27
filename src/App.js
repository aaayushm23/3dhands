import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { auth, db } from './firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import Login from './Login';
import Hands from './Hands';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userDoc);
        if (!userSnap.exists()) {
          // Assign hands based on user ID
          const handsData = user.uid === 'USER_ID_1' ? { leftHand: 'user1', rightHand: 'user1' } : { leftHand: 'user2', rightHand: 'user2' };
          await setDoc(userDoc, handsData);
          setUser({ uid: user.uid, ...handsData });
        } else {
          setUser({ uid: user.uid, ...userSnap.data() });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <div>
        {user ? (
          <>
            <button onClick={handleLogout}>Logout</button>
            <Hands user={user} />
          </>
        ) : (
          <Login />
        )}
      </div>
    </Router>
  );
};

export default App;
