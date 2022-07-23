import { gql } from "@apollo/client";

const GET_Mascotas = gql`
  query mascotas {
    mascotas {
        id
        raza
        edad
        color
        peso
    }
  }
`;
const GETMascota = gql`
  query mascota( $id: ID!){
    mascota(id: $id){
      id
      raza
      edad
      color
      peso
    }
  }

`;
export{GET_Mascotas,GETMascota};