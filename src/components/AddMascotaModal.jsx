import { useEffect, useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_Mascota } from "../mutations/mascotaMutation";
import { GET_Mascotas } from '../queries/mascotasQueries';

export default function AddMascotaModal() {
  const [raza, setraza] =  useState("");
  const [edad, setedad] =  useState(null);
  const [color, setcolor] =  useState("");
  const [peso, setpeso] =  useState("");
 


  const [ADD_Mascotas] = useMutation(
    ADD_Mascota,

    {
      variables: { raza, edad, color,peso },
      update(cache, { data: { ADD_Mascotas } }) {
        const { mascotas } = cache.readQuery({
            query:  GET_Mascotas,
        });

        cache.writeQuery({
          query: GET_Mascotas,
          data: {
            mascotas: [
              ...mascotas,
              ADD_Mascotas,
            ],
          },
        });
      },
    }
  );
 useEffect(() => {
  
 console.log(raza);
 console.log(edad);
 console.log(color);
 console.log(peso);

 })
 
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      raza === "" ||
      edad === null ||
      color === "" ||
      peso === ""
     

    ) {
      return alert("Por favor complete todo los campos");
    }

    ADD_Mascotas(raza, edad, color,peso);

    setraza("");
    setedad("");
    setcolor("");
    setpeso("");
    

  };

  return (
    <section>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#Addmascota"
      >
        <div className="d-flex align-items-center">
          
          <div>Añadir</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="Addmascota"
        aria-labelledby="AddmascotaLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="AddmascotaLabel">
                Añadir Mascota
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
                  <label className="form-label">Raza</label>
                  <input
                    
                    className="form-control"
                    id="raza"
                    value={raza}
                    onChange={(e) => setraza(e.target.value)}
                  ></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Edad</label>
                  <input
                   type="number"
                    className="form-control"
                    id="edad"
                    value={edad}
                    onChange = { (e) => {
                        const value = e.target.value;
                        console.log(value);
                        setedad(()=>value === '' ? null : Number(value))
                      }}
                  >
                    
                  </input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Color</label>
                  <input
                   
                    className="form-control"
                    id="color"
                    value={color}
                    onChange={(e) => setcolor(e.target.value)}
                  ></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Peso</label>
                  <input
                  
                   className="form-control"
                   id="peso"
                   value={peso}
                   onChange={(e) => setpeso(e.target.value)}
                  >
                    
                  </input>
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