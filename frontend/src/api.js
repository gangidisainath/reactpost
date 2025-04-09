import axios from "axios";
const API_URL = "https://sainath1729.pythonanywhere.com/api/";


export const Register=async (uname,upass,upass1)=>{
        const l=await axios.post(`${API_URL}register`,{uname:uname,upass:upass,upass1:upass1});
        return l.data
    };

export const Login=async (uname,upass)=>{
    const l=await axios.post(`${API_URL}Login`,{uname:uname,upass:upass});
    return l.data
};

export const fetchPosts = async (uname) => {
    const response=await axios.get(`${API_URL}getposts`,{params:{username:uname}});
    return response.data;};

export const fetchPost =async  (id) =>{
    const response=await axios.get(`${API_URL}getpost`,{params:{'id':id}});
    return response.data;
};

export const createPost =  async (pdata)=>{
        await axios.post(`${API_URL}create`,pdata);
        return 
}; 

export const updatePost = (id, post) => axios.put(`${API_URL}update`, {params:{'updatedpost':post}});

export const deletePost = async (id) =>{
        await axios.delete(`${API_URL}delete`,{params:{'id':id}});
        return;
};
export const deleteall = async (uname) =>{
    await axios.delete(`${API_URL}deleteall`,{params:{'username':uname}});
    return;
};
export const deleteacc=async ()=>{
        const response=await axios.post(`${API_URL}deleteacc`,{'username':localStorage.getItem('username')});
        return response;
};