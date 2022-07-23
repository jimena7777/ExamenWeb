import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GETMascota } from '../queries/mascotasQueries';
import { UPDATEMASCOTA } from '../mutations/mascotaMutation';

export default function EditarMascotas({mascota}) {
    
    const [raza, setraza] =  useState(mascota.raza);
    const [edad, setedad] =  useState(mascota.edad);
    const [color, setcolor] =  useState(mascota.color);
    const [peso, setpeso] =  useState(mascota.peso);
 

  
    const [UPDATEMASCOTAS]=useMutation(UPDATEMASCOTA,{
        variables: {id: mascota.id,raza,edad,color,peso},
        refetchQueries:[{query:GETMascota,variables:{id:mascota.id}}]
    });

    const onSubmit=(e)=>{
        e.preventDefault();

        if(!raza || !edad || !color || !peso ){
            return alert('Por favor complete los campos');
        }
        UPDATEMASCOTAS(raza,edad,color,peso);
    };

  return (
    <div className='mt-5'>
        <h3>Modificar Mascotas</h3>
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
                
                <button type='submit' className="btn btn-primary">
                    Modificar
                </button>
        </form>
    </div>
  )
}
