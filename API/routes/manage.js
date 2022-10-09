const express=require('express')
const router=express.Router()
const save=require('../models/save.model')

router.post('/addDetails',async(req,res)=>{
             
    console.log(req.body.title)
    console.log(req.body.desc)
    console.log(req.body.image)


//     if(files.body==undefined){
//         const post=new Post({
//         userId : fields.userId[0],
//         date : fields.date[0],
//         time : fields.time[0],
//         title : fields.title[0],
//         body : fields.body[0]
//     })

//  const response=await post.save()
//  response!=null ? res.json({code:'200',message:'create post successfull',data:null}) :
//                   res.json({code:'500',message:'create post Faild',data:null})
                   
//         }else{

//         var img = fs.readFileSync(files.body[0].path);
//         console.log(files)
//         var encode_img = img.toString('base64');
//         console.log(files)
//          const body=  Buffer.from(encode_img,'base64')

//       const post=new Post({
//         userId : fields.userId[0],
//         date : fields.date[0],
//         time : fields.time[0],
//         title : fields.title[0],
//         body : body
//    })
//    const response=await post.save()
//    response!=null ? res.json({code:'200',message:'create post successfull',data:null}) :
//                   res.json({code:'500',message:'create post Faild',data:null})

//         }
//     });

// router.get('/',async(req,res)=>{
//     console.log("requst eka labuna")
//     res.json({code:'500',message:'delete post Faild',data:null})
});

module.exports=router