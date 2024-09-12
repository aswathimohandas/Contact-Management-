import axios from "axios";

export const addContact=async(data)=>{
    return await axios.post("http://localhost:3000/contacts",data)
} 
export const getContacts=async()=>{
    return await axios.get("http://localhost:3000/contacts")
} 
export const deleteContacts=async(id)=>{
    return await axios.delete(`http://localhost:3000/contacts/${id}`)
}
export const updateContact = async (id,data) => {
    return axios.put(`http://localhost:3000/contacts/${id}`,data);
  };

