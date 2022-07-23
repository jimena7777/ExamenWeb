import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GETPersona } from '../queries/personasQueries';
import { UPDATEPERSONA } from '../mutations/personaMutation';

export default function EditarPersonas({persona}) {
    
    const [nombre, setnombre] =  useState(persona.nombre);
    const [apellido, setapellido] =  useState(persona.apellido);
    const [documento, setdocumento] =  useState(persona.documento);
    const [direccion, setdireccion] =  useState(persona.direccion);
    const [celular, setcelular] =  useState(persona.celular);

  
    const [UPDATEPERSONAS]=useMutation(UPDATEPERSONA,{
        variables: {id: persona.id,nombre,apellido,documento,direccion,celular},
        refetchQueries:[{query:GETPersona,variables:{id:persona.id}}]
    });

    const onSubmit=(e)=>{
        e.preventDefault();

        if(!nombre || !apellido || !documento || !direccion|| !celular ){
            return alert('Por favor complete los campos');
        }
        UPDATEPERSONAS(nombre,apellido,documento,direccion,celular);
    };

  return (
    <div className='mt-5'>
        <h3>Modificar Personas</h3>
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
                <button type='submit' className="btn btn-primary">
                    Modificar
                </button>
        </form>
    </div>
  )
}
