import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import { updateUser } from "./UserReducer"
function Update() {
  const { id } = useParams()
  const users = useSelector((state) => state.users)
  const existingUser = users.filter(f => f.id == id)
  const { name, email } = existingUser[0]
  const [uname, setName] = useState(name)
  const [uemail, setEmail] = useState(email)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleUpdate = (event) => {
    event.preventDefault()
    dispatch(updateUser({
      id: id,
      name: uname,
      email: uemail
    }))
    navigate('/')
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" w-96 bg-base-200 text-white p-5 rounded-lg shadow-lg">
        <h3 className="mb-4">Update User</h3>
        <form className="flex flex-col gap-4" onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" className="form-control input input-bordered input-md w-[340px]" placeholder="Enter name..." value={uname}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" className="form-control input input-bordered input-md w-[340px]" placeholder="Enter email..."
              value={uemail}
              onChange={e => setEmail(e.target.value)}

            />
          </div>
          <button className="btn btn-info btn-block">Update</button>
        </form>
      </div>
    </div>
  )
}

export default Update