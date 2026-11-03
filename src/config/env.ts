import 'dotenv/config'
//It will pick the pick the PORT from the enviornment vaiables if it don't find any PORT in the ev it will pick hard code varibale 

export const PORT = process.env.PORT || 3000; 