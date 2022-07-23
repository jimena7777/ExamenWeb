import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GETServicio } from '../queries/serviciosQueries';
import { UPDATESERVICIO } from '../mutations/servicioMutation';

export default function EditarMascotas({servicio}) {
    
    const [bano, setbano] =  useState(servicio.bano);
    const [recorte_pelo, setrecorte_pelo] =  useState(servicio.recorte_pelo);
    const [revision_veterinaria, setrevision_veterinaria] =  useState(servicio.revision_veterinaria);
    const [actividad_canina, setactividad_canina] =  useState(servicio.actividad_canina);
 

  
    const [UPDATESERVICIOS]=useMutation(UPDATESERVICIO,{
        variables: {id: servicio.id,bano,recorte_pelo,revision_veterinaria,actividad_canina},
        refetchQueries:[{query:GETServicio,variables:{id:servicio.id}}]
    });

    const onSubmit=(e)=>{
        e.preventDefault();

        if(!bano || !recorte_pelo || !revision_veterinaria || !actividad_canina ){
            return alert('Por favor complete los campos');
        }
        UPDATESERVICIOS(bano,recorte_pelo,revision_veterinaria,actividad_canina);
    };

  return (
    <div className='mt-5'>
        <h3>Modificar Servicios</h3>
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
                  <label className="form-label">Actividad Canina</label>
                  <input
                 
                    className="form-control"
                    id="actividad_canina"
                    value={actividad_canina}
                    onChange={(e) => setactividad_canina(e.target.value)}
                    
                  >  
                  </input>
                </div>
                
                <button type='submit' className="btn btn-primary">
                    Modificar
                </button>
        </form>
    </div>
  )
}