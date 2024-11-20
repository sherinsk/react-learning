// src/App.jsx
import Navbar from './components/Navbar';
import './App.css'

export default function App() {
  return (
    <div>
      <Navbar/>
      <main className="main-content">
        {/* Other content */}
        <h1>Welcome to the App</h1>
      </main>
    </div>
  );
}
