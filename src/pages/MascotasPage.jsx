import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useQuery } from '@apollo/client';
import { GETMascota } from '../queries/mascotasQueries'; 
import React from 'react'
import EditarMascotas from '../components/EditarMascotas';



export default function MascotasPage() {
  const {id}=useParams();
  const {loading,error,data} = useQuery(GETMascota,{variables:{id}});
  if (loading) return <Spinner />;
  if (error) return <p>Error</p>;
  return (
    <>
      {!loading && !error && (
        <div className='mx-auto w-75 card p-4'>
          <Link to='/mascotas' className='btn btn-secondary btn-sm w-25 d-inline ms-auto'>
            Atras
          </Link>
          <h5 className='mt-5'>Información de las mascotas</h5>
        <ul className='list-group'>
            <li className='list-group-item'>
                <p>Raza :</p>  {data.mascota.raza}
            </li>
            <li className='list-group-item'>
                <p>Edad :</p>  {data.mascota.edad}
            </li>
            <li className='list-group-item'>
                <p>Color :</p> {data.mascota.color}
            </li>
            <li className='list-group-item'>
                <p>Peso :</p>  {data.mascota.peso}
            </li>
            <EditarMascotas mascota={data.mascota}/>
            
        </ul>
      
        </div>
    )}
    </>
  );
}