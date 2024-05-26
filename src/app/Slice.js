import { createSlice,nanoid } from "@reduxjs/toolkit";

const Slice=createSlice({
    name:"crud",
    initialState:{
        users:[{
            id:nanoid(),
            first:"Nikhil",
            last:"Garg",
            email:"nikhilgarg@gmail.com",
            roll:"123"
        }]
    },
    reducers:{
        created:(state,action)=>{
            const obj={
                id:nanoid(),
                ...action.payload
            }
            state.users.push(obj);
        },
        deleted:(state,action)=>{
            const filter=state.users.filter((e)=>e.id!==action.payload)
            state.users=filter
        },
        updated:(state,action)=>{
            const filter=state.users.map((e)=> {
                if(action.payload.id!==e.id)
                    return e;
                else 
                    return action.payload.obj
            })
            state.users=filter;
        }
    }
})

export const {created,deleted,updated}=Slice.actions;

export default Slice.reducer;