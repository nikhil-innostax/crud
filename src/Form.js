import {useDispatch } from "react-redux";
import {created,updated} from "./app/Slice"


const Form=({obj,setObj,update,setUpdate})=>{
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(update!==null){
            dispatch(updated({id:update,obj:obj}))
            setUpdate(null);
        }
        else{
            dispatch(created(obj))
        }
        setObj({first:"",last:"",email:"",roll:""})
    }
    return (
        <form onSubmit={handleSubmit} className="text-center mx-auto">
            <div className="flex justify-center items-center flex-wrap">
                <label className="m-2 p-2 w-24">First Name:</label>
                <input className="m-2 p-2 border border-black" type="text" name="first" value={obj.first} onChange={(e) => setObj({ ...obj, [e.target.name]: e.target.value })} />
            </div>
            <div className="flex justify-center items-center flex-wrap">
                <label className="m-2 p-2 w-24">Last Name:</label>
                <input className="m-2 p-2 border border-black" type="text" name="last" value={obj.last} onChange={(e) => setObj({ ...obj, [e.target.name]: e.target.value })} />
            </div>
            <div className="flex justify-center items-center flex-wrap">
                <label className="m-2 p-2 w-24">Email :</label>
                <input className="m-2 p-2 border border-black" type="text" name="email" value={obj.email} onChange={(e) => setObj({ ...obj, [e.target.name]: e.target.value })} />
            </div>
            <div className="flex justify-center items-center flex-wrap">
                <label className="m-2 p-2 w-24">Roll No:</label>
                <input className="m-2 p-2 border border-black" type="text" name="roll" value={obj.roll} onChange={(e) => setObj({ ...obj, [e.target.name]: e.target.value })} />
            </div>
            <div className="flex justify-center items-center flex-wrap">
                <button className="bg-gray-700 text-white p-4 m-4 rounded hover:bg-gray-900" type="submit">Submit</button>
            </div>
        </form>
    
    )
}

export default Form;