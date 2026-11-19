// import multer from 'multer';

// let storage = multer.diskStorage({
//     destination:(req,file,cb) => {
//         cb(null,"./public")
//     },
//     filename:(req,file,cb)=>{
//         cb(null,file.originalname)
//     }
// });
// let upload = multer({storage})

// export default upload



import multer from 'multer';
import os from 'os';
import path from 'path';
import crypto from 'crypto';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, os.tmpdir());
    },

    filename: (req, file, cb) => {
        const uniqueName = crypto.randomUUID() + path.extname(file.originalname);
        cb(null, uniqueName);
    }
});

const upload = multer({ storage });

export default upload;