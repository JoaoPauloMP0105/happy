import multer from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, "..", "..", "uploads"),
        filename: (req, file, cb) => {
            const fileName = `${Date.now()}-${file.originalname}`; // gerando um novo nome de arquivo para imagem do orfanato

            cb(null, fileName); // função do callback para buscar o nome do arquivo no parametro "revisar documentação do multer"
        }
    })
}