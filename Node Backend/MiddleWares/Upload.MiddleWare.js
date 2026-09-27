const multer=require('multer');
const path=require('path');

const filterExtention=(req,file,cb)=>{
const extention=path.extname(file.originalname).toLowerCase();
const allowedExtentions=['.jpeg','.jpg','.png'];
if(allowedExtentions.includes(extention)){
    return cb(null,true);
}
return cb(new Error('only images allowed'));
}

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
    cb(null,'uploads');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname);
    }
});

const MB=1024*1024;
const upload=multer({filterExtention,storage,limits:2*MB});

module.exports=upload;