import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newContact, setNewContact] = useState({ name: "", telephone: "", image: "" });

  const handleGetData = async () => {
    try {
      const response = await axios.get("https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormSubmit = async (evento) => {
    evento.preventDefault();
    try {
      await axios.post("https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project", {
        names: newContact.name,
        telephone: newContact.telephone,
        image: newContact.image
      });
      setShowForm(false);
      handleGetData();
      setNewContact({ name: "", telephone: "", image: "" });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div className="container">
      <h1>Contactos</h1>
      {showForm ? (
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            value={newContact.name}
            onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Teléfono"
            value={newContact.telephone}
            onChange={(e) => setNewContact({ ...newContact, telephone: e.target.value })}
          />
          <input
            type="text"
            placeholder="URL de la imagen"
            value={newContact.image}
            onChange={(e) => setNewContact({ ...newContact, image: e.target.value })}
          />
          <button type="submit">Guardar</button>
        </form>
      ) : (
        <button onClick={() => setShowForm(true)}>Agregar contacto</button>
      )}

      <div className="contact-list">
        {data.map((contact, index) => (
          <div className="contact-card" key={index}>
            <img src={contact.image} alt={contact.name} className="contact-image" />
            <div className="contact-details">
              <h2>{contact.names}</h2>
              <p>{contact.telephone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
