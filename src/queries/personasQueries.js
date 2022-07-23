import { gql } from "@apollo/client";

const GET_Personas = gql`
  query personas {
    personas {
        id
        nombre
        apellido
        documento
        direccion
        celular
    }
  }
`;
const GETPersona = gql`
  query persona( $id: ID!){
    persona(id: $id){
      id
      nombre
      apellido
      documento
      direccion
      celular
    }
  }

`;

export{GET_Personas,GETPersona};