import { useDispatch,useSelector } from "react-redux"
import {deleted} from "./app/Slice"

const Table=({setObj,setUpdate})=>{
    const userDetails=useSelector(state=>state.users)
    const dispatch=useDispatch();
    const handleDelete=(ind)=>{
        dispatch(deleted(userDetails[ind].id))
    }
    const handleEdit=(ind)=>{
        setUpdate(userDetails[ind].id)
        setObj(userDetails[ind])
    }
    return (
        <table className="border border-black border-collapse text-center w-10/12 m-auto p-4">
            <thead className="border border-black text-2xl ">
                <td className="border border-black p-2 m-2">First Name:</td>
                <td className="border border-black p-2 m-2">Last Name:</td>
                <td className="border border-black p-2 m-2">Email:</td>
                <td className="border border-black p-2 m-2">Roll No.</td>
                <td className="border border-black p-2 m-2">Actions:</td>
            </thead>
            <tbody>
                {
                    userDetails.map((e,ind)=>(
                        <tr key={e.id}>
                            <td className="border border-black p-2 m-2">{e.first}</td>
                            <td className="border border-black p-2 m-2">{e.last}</td>
                            <td className="border border-black p-2 m-2">{e.email}</td>
                            <td className="border border-black p-2 m-2">{e.roll}</td>
                            <td className="border border-black p-2 m-2">
                                <button className="p-2 m-2 text-white bg-blue-600 rounded hover:bg-blue-800" onClick={()=>{handleEdit(ind)}}>Edit</button>
                                <button className="p-2 m-2 text-white bg-red-600 rounded hover:bg-red-800" onClick={()=>{handleDelete(ind)}}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table;