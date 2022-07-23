import { gql } from '@apollo/client';

const ADD_SERVICIO= gql`
  mutation addServicios( $bano: String!,$recorte_pelo: String!,$revision_veterinaria: String!,$actividad_canina:String!){
    addServicios(bano:$bano,recorte_pelo:$recorte_pelo,revision_veterinaria:$revision_veterinaria,actividad_canina:$actividad_canina){
      id
      bano
      recorte_pelo
      revision_veterinaria
      actividad_canina
      
    }
  }
`;


const deleteServicios = gql`
  mutation deleteServicios($id: ID!) {
    deleteServicios(id: $id) {
        id
        bano
        recorte_pelo
        revision_veterinaria
        actividad_canina
       
    }
  }
`;

const UPDATESERVICIO = gql`
  mutation updateServicios(
    $id: ID!,
    $bano: String!,
    $recorte_pelo: String!,
    $revision_veterinaria: String!,
    $actividad_canina:String!
  ) {
    updateServicios(
      id: $id,
      bano:$bano,
      recorte_pelo:$recorte_pelo,
      revision_veterinaria:$revision_veterinaria,
      actividad_canina:$actividad_canina
    ) {
      id
      bano
      recorte_pelo
      revision_veterinaria
      actividad_canina
     
      }
    }
`;

export {ADD_SERVICIO,deleteServicios,UPDATESERVICIO};