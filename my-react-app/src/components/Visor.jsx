import React, { useEffect, useState } from 'react';

const Visor = ({ 
  cursoId, 
  tema 
}) => {
  const [html, setHtml] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNota = async () => {
      if (!cursoId || !tema) {
        return;
      }

      setLoading(true);

      try {
        const res = await fetch(`./notas/${cursoId}/${tema.id}.html`);

        if (res.ok) {
          const text = await res.text();
          setHtml(text);
          setLoading(false);
        } 
        else {
          setHtml('<div class="error">Archivo no hallado</div>');
          setLoading(false);
        }
      } 
      catch (error) {
        setHtml('<div class="error">Error de conexión</div>');
        setLoading(false);
      }
    };

    fetchNota();
  }, [cursoId, tema]);

  useEffect(() => {
    if (!loading && window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, [html, loading]);

  if (loading) {
    return (
      <div className="loader">
        <span>Cargando exégesis...</span>
      </div>
    );
  }

  return (
    <div className="visor-container">
      <header className="visor-header">
        <span className="badge-curso">
          {cursoId.toUpperCase()}
        </span>
        <span className="theme-name">
          {tema.nombre.toUpperCase()}
        </span>
      </header>

      <article 
        className="academic-content" 
        dangerouslySetInnerHTML={{ __html: html }} 
      />
    </div>
  );
};

export default Visor;