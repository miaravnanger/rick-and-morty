import axios from "axios";

const api = axios.create({ 
    baseURL: "https://rickandmortyapi.com/api",
})


const fetchCharById = async (id) => {
    const res = await api.get(
      `/character/${id}`
    );
    return res.data;
  };

const fetchCharByIds = async (ids) => {
    const idString = ids.join(",");
    const response = await api.get(`/character/${idString}`);
    return Array.isArray(response.data) ? response.data : [response.data];
}

const fetchAllChar = async (page = 1) => {
  const res = await api.get(`/character/?page=${page}`);
  return res.data;
};

const searchCharsByName = async (name) => {
    const res = await api.get(`/character/?name=${name}`);
    return res.data
}

export { fetchCharById, fetchCharByIds, fetchAllChar, searchCharsByName };
