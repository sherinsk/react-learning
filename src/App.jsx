// src/App.jsx
import Navbar from './components/Navbar';

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
