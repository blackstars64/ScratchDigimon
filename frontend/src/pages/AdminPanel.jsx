import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "../scss/AdminPanel.scss";
import AdminForm from "../components/AdminForm";
import { DigimonsContext } from "../context/DigimonsContext";

function AdminPanel() {
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [fullUsers, setFullUsers] = useState(null);
  const [inputSearch, setInputSearch] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [idBeingEdited, setIdBeingEdited] = useState(null);
  const { user } = useContext(AuthContext);
  const { setDatasDigimon, datasDigimon, originalDatasDigimon, isLoading } =
    useContext(DigimonsContext);

  useEffect(() => {
    const fetchDatasUser = () => {
      setIsLoadingUser(true);

      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/users/all`)
        .then((res) => {
          setFullUsers(res.data);
          setIsLoadingUser(false);
        })
        .catch((err) => console.error(err));
    };
    fetchDatasUser();
  }, []);

  const handleChange = (e) => {
    const inputValue = e.target.value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    setInputSearch(inputValue);

    const filteredDigimons = originalDatasDigimon.filter((data) => {
      return (
        String(data.name)
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(inputValue) ||
        String(data.level)
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(inputValue)
      );
    });

    setDatasDigimon(
      inputValue === "" ? originalDatasDigimon : filteredDigimons
    );
  };

  if (!datasDigimon) {
    return <p className="Loading">Loading in progress...</p>;
  }
  if (!fullUsers) {
    return <p className="Loading">Loading in progress...</p>;
  }
  if (!user) {
    return <p className="Loading">Loading in progress...</p>;
  }
  if (isLoading === true && isLoadingUser === true) {
    return <p className="Loading">Loading in progress...</p>;
  }

  const handleClick = (id) => {
    setIsEditing(!isEditing);
    setIdBeingEdited(id);
  };

  return (
    <section className="admin">
      {user.is_admin === 1 && datasDigimon && (
        <>
          <h1>Admin Panel</h1>
          <p className="admin-user">Users registered : {fullUsers.id}</p>
          <input
            className="admin-search"
            type="text"
            value={inputSearch}
            placeholder="Rechercher un Digimon"
            onChange={handleChange}
          />
          <table>
            <tr>
              <th className="admin-none">none</th>
              <th scope="col">Name</th>
              <th scope="col">Picture</th>
              <th scope="col">Level</th>
            </tr>

            {datasDigimon &&
              datasDigimon.map((data) => (
                <React.Fragment key={data.id}>
                  {isEditing && idBeingEdited === data.id && (
                    <AdminForm
                      idBeingEdited={idBeingEdited}
                      setIsEditing={setIsEditing}
                      setIdBeingEdited={setIdBeingEdited}
                      data={data}
                    />
                  )}
                  <tr key={data.id}>
                    <td className="admin-none">
                      <button
                        onClick={() => handleClick(data.id)}
                        type="button"
                        className="admin-edit"
                      >
                        Edit
                      </button>
                    </td>
                    <td>{data.name}</td>
                    <td>
                      <img
                        className="admin-img"
                        src={data.img}
                        alt={data.name}
                      />
                    </td>
                    <td>{data.level}</td>
                  </tr>
                </React.Fragment>
              ))}
          </table>
        </>
      )}
    </section>
  );
}

export default AdminPanel;
