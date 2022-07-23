import { gql } from "@apollo/client";

const GET_Servicios = gql`
  query servicios {
    servicios {
        id
        bano
        recorte_pelo
        revision_veterinaria
        actividad_canina
    }
  }
`;
const GETServicio = gql`
  query servicio( $id: ID!){
    servicio(id: $id){
      id
      bano
      recorte_pelo
      revision_veterinaria
      actividad_canina
    }
  }

`;
export{GET_Servicios,GETServicio};
