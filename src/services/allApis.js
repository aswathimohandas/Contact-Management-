import axios from "axios";
const basic_url="https://cm-server-bku9.onrender.com"

export const addContact=async(data)=>{
    return await axios.post(`${basic_url}/contacts`,data)
} 
export const getContacts=async()=>{
    return await axios.get(`${basic_url}/contacts`)
} 
export const deleteContacts=async(id)=>{
    return await axios.delete(`${basic_url}/contacts/${id}`)
}
export const updateContact = async (id,data) => {
    return axios.put(`${basic_url}/contacts/${id}`,data);
  };

