const multer=require('multer')

const storage=multer.diskStorage({
    destination: (req, file, callback) => { 
        let folder; if (['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/webp'].includes(file.mimetype)){
         folder = './uploads/images'; } 
        else if (file.mimetype === 'application/pdf') {
             folder = './uploads/pdfs'; } 
        else {
             folder = './uploads/other';
             }
        callback(null, folder);
},

    filename: (req, file, callback) => {
        let filename;
        if (['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/webp'].includes(file.mimetype)) {
            filename = `Image-type-${Date.now()}-${file.originalname}`;
        } else if (file.mimetype === 'application/pdf') {
            filename = `Document-pdf-${Date.now()}-${file.originalname}`;
        } else {
            filename = `Other-type-${Date.now()}-${file.originalname}`;
        }
        callback(null, filename);
    }
    
})

const fileFilter=(req,file,callback)=>{
    if(file.mimetype==="image/png" ||  file.mimetype==="image/jpg" || file.mimetype==="image/jpeg" || file.mimetype==="image/gif" || file.mimetype==="image/webp" || file.mimetype=== 'application/pdf'){
        callback(null,true)
    }else{
        callback(null,false)
        return callback(new Error("Only .png, .jpg, .jpeg, .gif, .webp ad ./pdf files are allowed!!"))
        
    }
}

const Mconfig=multer({
    storage,
    fileFilter
})

module.exports=Mconfig