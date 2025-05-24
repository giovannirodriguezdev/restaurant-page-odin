import React, { useState } from 'react';
import Home from './components/home';
import Menu from './components/menu';
import Contact from './components/contact';

export default function App() {
  const [currentTab, setCurrentTab] = useState('Home');

  let CurrentComponent;
  if (currentTab === 'Menu') CurrentComponent = Menu;
  else if (currentTab === 'Contact') CurrentComponent = Contact;
  else CurrentComponent = Home;

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentTab('Home')}>Home</button>
        <button onClick={() => setCurrentTab('Menu')}>Menu</button>
        <button onClick={() => setCurrentTab('Contact')}>Contact</button>
      </nav>
      <div id="content">
        <CurrentComponent />
      </div>
    </div>
  );
}
