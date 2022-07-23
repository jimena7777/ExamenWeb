import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useQuery } from '@apollo/client';
import { GETServicio } from '../queries/serviciosQueries'; 
import React from 'react'
import EditarServicios from '../components/EditarServicios';



export default function ServiciosPage() {
  const {id}=useParams();
  const {loading,error,data} = useQuery(GETServicio,{variables:{id}});
  if (loading) return <Spinner />;
  if (error) return <p>Error</p>;
  return (
    <>
      {!loading && !error && (
        <div className='mx-auto w-75 card p-4'>
          <Link to='/servicios' className='btn btn-secondary btn-sm w-25 d-inline ms-auto'>
            Atras 
          </Link>
          <h5 className='mt-5'>Información de los servicios</h5>
        <ul className='list-group'>
            <li className='list-group-item'>
                <p>Baño :</p>  {data.servicio.bano}
            </li>
            <li className='list-group-item'>
                <p>Recorte Pelo :</p>  {data.servicio.recorte_pelo}
            </li>
            <li className='list-group-item'>
                <p>Revision Veterinaria :</p> {data.servicio.revision_veterinaria}
            </li>
            <li className='list-group-item'>
                <p>Actividad Canina :</p>  {data.servicio.actividad_canina}
            </li>
            <EditarServicios servicio={data.servicio}/>
           
        </ul>
      
        </div>
    )}
    </>
  );
}