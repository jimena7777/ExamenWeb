import { useEffect, useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_PERSONA } from "../mutations/personaMutation";
import { GET_Personas } from '../queries/personasQueries';

export default function AddPersonasModal() {
  const [nombre, setnombre] =  useState("");
  const [apellido, setapellido] =  useState("");
  const [documento, setdocumento] =  useState(null);
  const [direccion, setdireccion] =  useState(null);
  const [celular, setcelular] =  useState(null);


  const [ADD_PERSONAS] = useMutation(
    ADD_PERSONA,

    {
      variables: { nombre, apellido, documento,direccion,celular },
      update(cache, { data: { ADD_PERSONAS } }) {
        const { personas } = cache.readQuery({
            query:  GET_Personas,
        });

        cache.writeQuery({
          query: GET_Personas,
          data: {
            personas: [
              ...personas,
              ADD_PERSONAS,
            ],
          },
        });
      },
    }
  );
 useEffect(() => {
  
 console.log(nombre);
   
 })
 
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      nombre === "" ||
      apellido === "" ||
      documento === null ||
      direccion === "" ||
      celular === null

    ) {
      return alert("Por favor complete todo los campos");
    }

    ADD_PERSONAS(nombre, apellido, documento,direccion,celular);

    setnombre("");
    setapellido("");
    setdocumento("");
    setdireccion("");
    setcelular("");

  };

  return (
    <section>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#AddBeneficiariosModal"
      >
        <div className="d-flex align-items-center">
          
          <div>Añadir</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="AddBeneficiariosModal"
        aria-labelledby="AddBeneficiariosModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="AddBeneficiariosModalLabel">
                Añadir Persona
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input
                    
                    className="form-control"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setnombre(e.target.value)}
                  ></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Apellido</label>
                  <input
                    className="form-control"
                    id="apellido"
                    value={apellido}
                    onChange={(e) => setapellido(e.target.value)}
                  >
                    
                  </input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Documento</label>
                  <input
                    type="number"
                    className="form-control"
                    id="documento"
                    value={documento}
                    onChange = { (e) => {
                      const value = e.target.value;
                      console.log(value);
                      setdocumento(()=>value === '' ? null : Number(value))
                    }}
                  ></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Direccion</label>
                  <input
                    className="form-control"
                    id="direccion"
                    value={direccion}
                    onChange={(e) => setdireccion(e.target.value)}
                  >
                    
                  </input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Celular</label>
                  <input
                    type="number"
                    className="form-control"
                    id="celular"
                    value={celular}
                    onChange = { (e) => {
                      const value = e.target.value;
                      console.log(value);
                      setcelular(()=>value === '' ? null : Number(value))
                    }}
                  ></input>
                </div>
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-secondary"
                >
                  Guardar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}