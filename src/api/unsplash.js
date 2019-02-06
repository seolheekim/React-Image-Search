import axios from 'axios';

//create method is going to create a instance of the axios
//client with a couple of defaulted properties.
export default  axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID fe61e0f4769944ec05b7fef40eddbc66b93a5ed866db8c526a860ebf04a30b0b'
  }
});