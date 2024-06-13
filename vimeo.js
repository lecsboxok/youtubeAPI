import axios from 'axios';

const API_KEY = '';

export const buscarVideos = async (query) => {
  try {
    const pesquisa = await axios.get('https://api.vimeo.com/videos', {
        headers: {
            'Authorization': `Bearer ${API_KEY}`
          },
          params: {
            query: query,
            per_page: 10
          }
    });
    return pesquisa.data.data;
  } catch (erro) {
    console.error('Erro ao buscar vídeos do Vimeo:', erro);
    throw erro;
  }
};
