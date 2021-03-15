import axios from 'axios'

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
    const response = await axios.get(`https://apodapi.herokuapp.com/search/?search_query=${searchQuery}`)
    .catch(()=>{
        return "error"
    })
    return response
}