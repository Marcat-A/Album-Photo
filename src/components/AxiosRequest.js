import axios from 'axios';

const BASEURL = 'https://jsonplaceholder.typicode.com'

export const getPhotosByAlbum = (albumId, setAlbum) => {
    const url = `${BASEURL}/albums/${albumId}/photos?albumId=${albumId}`
    axios.get(url).then((response) => {
      setAlbum(response.data)
    })
}
