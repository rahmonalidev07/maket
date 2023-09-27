import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom";
import { deleteUser } from "./UserReducer";

function Home() {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteUser({id: id}))
  }
  return (
    <div className="container max-w-5xl w-full ml-auto mr-auto mt-7">
      <h2 className="text-3xl font-medium">Crud App with JSON Server</h2>
      <NavLink to='/create' className="btn btn-success my-3 text-sm">Create +</NavLink>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>

          </tr>
        </thead>  
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td className="flex gap-4">
                <NavLink to={`/edit/${user.id}`} className="btn btn-sm btn-primary">Edit</NavLink>
                <button onClick={() => handleDelete(user.id)} className="btn btn-sm btn-error ms-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Home