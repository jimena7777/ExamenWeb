import { gql } from '@apollo/client';


const ADD_Mascota= gql`
  mutation addMascotas( $raza: String!,$edad: Int!,$color: String!,$peso:String!){
    addMascotas(raza:$raza,edad:$edad,color:$color,peso:$peso){
      id
      raza
      edad
      color
      peso
      
    }
  }
`;

const deleteMascotas = gql`
  mutation deleteMascotas($id: ID!) {
    deleteMascotas(id: $id) {
        id
        raza
        edad
        color
        peso
        
    }
  }
`;
const UPDATEMASCOTA = gql`
  mutation updateMascotas(
    $id: ID!,
    $raza: String!,
    $edad: Int!,
    $color: String!,
    $peso:String!
  ) {
    updateMascotas(
      id: $id,
      raza:$raza,
      edad:$edad,
      color:$color,
      peso:$peso
    ) {
      id
      raza
      edad
      color
      peso
     
      }
    }
`;

export {ADD_Mascota,deleteMascotas,UPDATEMASCOTA};