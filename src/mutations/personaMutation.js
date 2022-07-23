import { gql } from '@apollo/client';

const ADD_PERSONA= gql`
  mutation addPersonas( $nombre: String!,$apellido: String!,$documento: Int!,$direccion:String!,$celular:Int!){
    addPersonas(nombre:$nombre,apellido:$apellido,documento:$documento,direccion:$direccion,celular:$celular){
      id
      nombre
      apellido
      documento
      direccion
      celular
    }
  }
`;

const deletePersonas = gql`
  mutation deletePersonas($id: ID!) {
    deletePersonas(id: $id) {
        id
        nombre
        apellido
        documento
        direccion
        celular
    }
  }
`;
const UPDATEPERSONA = gql`
  mutation updatePersonas(
    $id: ID!,
    $nombre: String!,
    $apellido: String!,
    $documento: Int!,
    $direccion:String!,
    $celular:Int!
  ) {
    updatePersonas(
      id: $id,
      nombre:$nombre,
      apellido:$apellido,
      documento:$documento,
      direccion:$direccion,
      celular:$celular
    ) {
      id
      nombre
      apellido
      documento
      direccion
      celular
     
      }
    }
`;
export {ADD_PERSONA,deletePersonas,UPDATEPERSONA};