import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Visor from './components/Visor';

function App() {
  const [curso, setCurso] = useState(null);
  const [tema, setTema] = useState(null);
  const [open, setOpen] = useState(false);
  const [modoTemas, setModoTemas] = useState(false);

  const handleSelectCurso = (c) => { 
    setCurso(c); 
    setModoTemas(true); 
  };

  const handleSelectTema = (t) => { 
    setTema(t); 
    setOpen(false); 
  };

  return (
    <div className="app-container">
      <button 
        className="floating-toggle" 
        onClick={() => setOpen(true)}
      >
        <i className="bi bi-list"></i>
      </button>

      <Sidebar 
        isOpen={open} 
        onClose={() => setOpen(false)}
        modoTemas={modoTemas} 
        setModoTemas={setModoTemas}
        curso={curso} 
        onSelectCurso={handleSelectCurso} 
        onSelectTema={handleSelectTema}
      />

      <main className="content-area">
        {!tema ? (
          <div className="hero">
            <h1 className="hero-title">UNI</h1>
            <p className="hero-subtitle">Bienvenido a las notas de Newton</p>
            <button 
              className="btn-start" 
              onClick={() => setOpen(true)}
            >
              EXPLORAR CÁTEDRAS
            </button>
          </div>
        ) : (
          <Visor 
            cursoId={curso.id} 
            tema={tema} 
          />
        )}
      </main>
    </div>
  );
}

export default App;