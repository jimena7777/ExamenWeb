import { useEffect, useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_SERVICIO } from "../mutations/servicioMutation";
import { GET_Servicios } from '../queries/serviciosQueries';

export default function AddPersonasModal() {
  const [bano, setbano] =  useState("");
  const [recorte_pelo, setrecorte_pelo] =  useState("");
  const [revision_veterinaria, setrevision_veterinaria] =  useState("");
  const [actividad_canina, setactividad_canina] =  useState("");
 


  const [ADD_SERVICIOS] = useMutation(
    ADD_SERVICIO,

    {
      variables: { bano, recorte_pelo, revision_veterinaria,actividad_canina },
      update(cache, { data: { ADD_SERVICIOS } }) {
        const { servicios } = cache.readQuery({
            query:  GET_Servicios,
        });

        cache.writeQuery({
          query: GET_Servicios,
          data: {
            servicios: [
              ...servicios,
              ADD_SERVICIOS,
            ],
          },
        });
      },
    }
  );
 useEffect(() => {
  
 console.log(bano);
   
 })
 
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      bano === "" ||
      recorte_pelo === "" ||
      revision_veterinaria === "" ||
      actividad_canina === ""
     

    ) {
      return alert("Por favor complete todo los campos");
    }

    ADD_SERVICIOS(bano, recorte_pelo, revision_veterinaria,actividad_canina);

    setbano("");
    setrecorte_pelo("");
    setrevision_veterinaria("");
    setactividad_canina("");
    

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
                Añadir Servicios
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
                  <label className="form-label">Baño</label>
                  <input
                    
                    className="form-control"
                    id="bano"
                    value={bano}
                    onChange={(e) => setbano(e.target.value)}
                  ></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Recorte pelo</label>
                  <input
                    className="form-control"
                    id="recorte_pelo"
                    value={recorte_pelo}
                    onChange={(e) => setrecorte_pelo(e.target.value)}
                  >
                    
                  </input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Revision veterinaria</label>
                  <input
                    
                    className="form-control"
                    id="revision_veterinaria"
                    value={revision_veterinaria}
                    onChange={(e) => setrevision_veterinaria(e.target.value)}
                  ></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">actividad_canina</label>
                  <input
                    className="form-control"
                    id="actividad_canina"
                    value={actividad_canina}
                    onChange={(e) => setactividad_canina(e.target.value)}
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