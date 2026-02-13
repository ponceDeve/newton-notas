import React from 'react';
import { CURSOS } from '../data/cursos';
import { TEMAS_POR_CURSO } from '../data/temas';

const Sidebar = ({ 
  isOpen, 
  onClose, 
  modoTemas, 
  setModoTemas, 
  curso, 
  onSelectCurso, 
  onSelectTema 
}) => {
  const temas = curso 
    ? TEMAS_POR_CURSO[curso.id] || [] 
    : [];

  return (
    <>
      <div 
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`} 
        onClick={onClose}
      >
      </div>
      
      <div className={`sidebar-panel ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="header-left">
            {modoTemas && (
              <button 
                className="icon-btn" 
                onClick={() => setModoTemas(false)}
              >
                <i className="bi bi-arrow-left"></i>
              </button>
            )}
          </div>
          
          <span className="sidebar-title">
            {modoTemas 
              ? curso?.nombre.toUpperCase() 
              : 'CÁTEDRAS'}
          </span>

          <div className="header-right">
            <button 
              className="icon-btn" 
              onClick={onClose}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>

        <div className="sidebar-content">
          {!modoTemas ? (
            CURSOS.map((c) => (
              <div 
                key={c.id} 
                className="menu-item" 
                onClick={() => onSelectCurso(c)}
              >
                <i className="bi bi-mortarboard-fill me-3 text-info"></i>
                <span>{c.nombre}</span>
              </div>
            ))
          ) : (
            temas.length > 0 ? (
              temas.map((t) => (
                <div 
                  key={t.id} 
                  className="menu-item theme-item" 
                  onClick={() => onSelectTema(t)}
                >
                  <div className="theme-info">
                    <small className="text-info fw-bold">
                      ID: {t.id.toUpperCase()}
                    </small>
                    <p className="m-0">
                      {t.nombre}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-themes-msg">
                <i className="bi bi-folder-x d-block mb-2 fs-2"></i>
                No hay temas registrados para esta cátedra.
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;