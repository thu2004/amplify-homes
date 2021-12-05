import './App.css';
import { CardACollection } from './ui-components'
import { Authenticator } from '@aws-amplify/ui-react';

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <CardACollection/>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}