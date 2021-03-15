import InputSearch from './index'

import { screen, render, fireEvent } from '../../test'

import { search } from '../../service'
import mockAxios from 'axios'

jest.mock('axios')

var data = [
    {
        'apod_site': '',
        'copyright': '',
        'date': '',
        'description': '',
        'media_type': '',
        'title': '',
        'url': ''
    },
    {
        'apod_site': '',
        'copyright': '',
        'date': '',
        'description': '',
        'media_type': '',
        'title': '',
        'url': ''
    }
]

const url= 'https://apodapi.herokuapp.com'

describe('InputSearch', () => {
    it('search with empty field', async () => {
        render(
            <InputSearch />
        )
        const input = screen.getByPlaceholderText('Type here...')
        fireEvent.change(input, { target: { value: '' } })
        //expect(input.value).toBe('')
        //const button = screen.getAllByRole('button')
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: "error"
            })
        )
        const response = await search(input.value)
        expect(response.data).toEqual('error')
        expect(mockAxios.get).toHaveBeenCalledWith(
            `${url}/search/?search_query=${input.value}`
        )
    })

    it('search not empty field', async () => {
        render(
            <InputSearch setFieldSearch={()=>{}}/>
        )
        const input = screen.getByPlaceholderText('Type here...')
        fireEvent.change(input, { target: { value: 'moon' } })
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: data
            })
        )
        const response = await search(input.value)
        expect(response.data).toEqual(data)
        expect(mockAxios.get).toHaveBeenCalledWith(
            `${url}/search/?search_query=${input.value}`
        )
    })
});