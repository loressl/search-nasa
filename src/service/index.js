import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://apodapi.herokuapp.com/'
})

export async function search (fieldSearch) {
    var fields = fieldSearch.split(' ')
    var searchQuery = fields[0].toLowerCase()
    if (fields.length > 0) {
        // eslint-disable-next-line
        fields.map((item, index) => {
            if (index !== 0) {
                searchQuery = searchQuery.concat("%20", item.toLowerCase())
            }
        })
    }
    const response = await axiosInstance.get(`/search/?search_query=${searchQuery}`).catch(()=>{
        return "error"
    })
    return response
}