// import './App.css';
import NavBar from './components/NavBar';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import MailboxDetails from './components/MailboxDetails';
import { useState } from 'react';
import { Route, Routes, BrowserRouter} from "react-router-dom";
const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (formData) => {
    formData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, formData]);
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
     </BrowserRouter>
  );
}

export default App;