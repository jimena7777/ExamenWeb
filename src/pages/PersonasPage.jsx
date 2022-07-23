import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useQuery } from '@apollo/client';
import { GETPersona } from '../queries/personasQueries'; 
import React from 'react'
import EditarPersonas from '../components/EditarPersonas';


export default function PersonasPage() {
  const {id}=useParams();
  const {loading,error,data} = useQuery(GETPersona,{variables:{id}});
  if (loading) return <Spinner />;
  if (error) return <p>Error</p>;
  return (
    <>
      {!loading && !error && (
        <div className='mx-auto w-75 card p-4'>
          <Link to='/personas' className='btn btn-secondary btn-sm w-25 d-inline ms-auto'>
            Atras
          </Link>
          <h5 className='mt-5'>Información de las personas</h5>
        <ul className='list-group'>
            <li className='list-group-item'>
                <p>Nombre :</p>  {data.persona.nombre}
            </li>
            <li className='list-group-item'>
                <p>Apellido :</p>  {data.persona.apellido}
            </li>
            <li className='list-group-item'>
                <p>Documento :</p> {data.persona.documento}
            </li>
            <li className='list-group-item'>
                <p>Direccion :</p>  {data.persona.direccion}
            </li>
            <li className='list-group-item'>
                <p>Celular :</p>  {data.persona.celular}
            </li>
            <EditarPersonas persona={data.persona}/>
        </ul>
      
        </div>
    )}
    </>
  );
}