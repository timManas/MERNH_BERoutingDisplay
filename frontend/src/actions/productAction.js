import axios from 'axios'

export const listProducts = () => async () => {
  const data = ''
  try {
    data = await axios.get(`/api/products`)
    console.log('Products: ' + data)
  } catch (error) {
    console.log('Error Here')
  }

  return data
}
