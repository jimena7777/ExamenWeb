import { FaTrash, FaRegEye } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { deleteMascotas } from "../mutations/mascotaMutation";
import { GET_Mascotas } from "../queries/mascotasQueries";

export default function MascotaRow({ mascota }) {
  const [deleteMascota] = useMutation(deleteMascotas, {
    variables: { id: mascota.id },
    refetchQueries: [{ query: GET_Mascotas }],
  });
  return (
    <tr>
      <td>{mascota.raza}</td>
      <td>{mascota.edad}</td>
      <td>{mascota.color}</td>
      <td>{mascota.peso}</td>

      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteMascota}>
          <FaTrash />
        </button>
      </td>

      <td>
        <a className="btn btn-info btn-sm" href={`/infomascotas/${mascota.id}`}>
          <FaRegEye />
        </a>
      </td>
    </tr>
  );
}
