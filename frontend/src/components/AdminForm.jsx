import axios from "axios";
import { useRef } from "react";
import PropTypes from "prop-types";

function AdminForm({ data, idBeingEdited, setIsEditing, setIdBeingEdited }) {
  const nameRef = useRef();
  const imgRef = useRef();
  const levelRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/api/digimons/${idBeingEdited}`,
        {
          name: nameRef.current.value,
          img: imgRef.current.value,
          level: levelRef.current.value,
        }
      )
      .then(() => {
        setIsEditing(false);
        setIdBeingEdited(null);
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };
  return (
    <section className="admin-contenair-form">
      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          className="admin-input"
          type="text"
          defaultValue={data.name}
          ref={nameRef}
        />
        <input
          className="admin-input"
          type="text"
          defaultValue={data.img}
          ref={imgRef}
        />
        <input
          className="admin-input"
          type="text"
          defaultValue={data.level}
          ref={levelRef}
        />
        <button type="submit" className="admin-submit">
          Submit
        </button>
      </form>
    </section>
  );
}

AdminForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
  }).isRequired,
  idBeingEdited: PropTypes.number.isRequired,
  setIsEditing: PropTypes.func.isRequired,
  setIdBeingEdited: PropTypes.func.isRequired,
};

export default AdminForm;
