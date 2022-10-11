const express=require('express')
const router=express.Router()
const Post=require('../models/post.model')
var multiparty = require('multiparty');
const fs = require("fs");

router.post('/addDetails',async(req,res)=>{
    var form = new multiparty.Form();
    form.parse(req, async(err, fields, files)=> {

          if(files!=undefined){
            var img = fs.readFileSync(files.body[0].path);
            var encode_img = img.toString('base64');
          
            //  const body=  Buffer.from(encode_img,'base64')
             
             const post=new Post({
                title : fields.title[0],
                desc : fields.desc[0],
                image : encode_img
           })
           const response=await post.save()
           response!=null ? res.json({code:'200',message:'create post successfull',data:null}) :
                  res.json({code:'500',message:'create post Faild',data:null})

        }
    });
});


router.get('/getAllPost',async(req,res)=>{
    const response= await Post.find()
    const array=[];
      for (const ob of response) {
            const json={
                title : ob.title,
                desc  : ob.desc,
                image : ob.image
            }
            array.push(json)
            
      }
      res.json(array)
  
  })
  


module.exports=router