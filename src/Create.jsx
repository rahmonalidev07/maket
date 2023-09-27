import { useState } from "react"
import { addUser } from "./UserReducer"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function Create() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addUser({id: users[users.length - 1].id+1, name, email}))
        navigate('/')
    }

    return (
        <div className="h-screen flex justify-center items-center">
            <div className=" w-96 bg-base-200 text-white p-5 rounded-lg shadow-lg">
                <h3 className="mb-4">Add New User</h3>  
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control input input-bordered input-md w-[340px]" placeholder="Enter name..."
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" className="form-control input input-bordered input-md w-[340px]" placeholder="Enter email..."
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-info btn-block">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create