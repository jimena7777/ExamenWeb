import { useQuery } from "@apollo/client";
import MascotaRow from "./MascotaRow";
import Spinner from "./Spinner";
import { GET_Mascotas } from "../queries/mascotasQueries";

export default function Mascotas() {
  const { loading, error, data } = useQuery(GET_Mascotas);
  if (loading) return <Spinner />;
  if (error) return <p>Error..</p>;
  return (
    <section>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Raza</th>
              <th>Edad</th>
              <th>Color</th>
              <th>Peso</th>

              <th>Eliminar</th>
              <th>Ver</th>
            </tr>
          </thead>
          <tbody>
            {data.mascotas.map((mascota) => (
              <MascotaRow key={mascota.id} mascota={mascota} />
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
