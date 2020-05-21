const exp=require('express');
const router=exp.Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const saltRounds=10;

//import dbo from db.js
var dbo=require('../db');
dbo.initDb();


//handle signup form 

router.post('/signup',  (req,res)=>{
  //console.log(req.body.email);
  if(dbo==='undefined')
  {
    dbo.initDb();
  }
  var usercollectionObj=dbo.getDb().userCollectionObj;
  usercollectionObj.findOne({email:req.body.email},(err,userObj)=>{
    if(err){
      console.log('error occured during signup form', err);
    }
    else if(userObj!=null)
    {
      res.send({message:"Email already exists"});
    }
    else
    {
        
      bcrypt.genSalt(saltRounds,  (err, salt) =>{
        if (err) {
          console.log('Error during generating salt',err);
        } else {
          bcrypt.hash(req.body.password, salt, (err, hash) =>{
            if (err) {
             console.log('error during hasing a passsword',err);
            } else {
               req.body.password=hash;
               console.log(hash); //$2a$10$FEBywZh8u9M0Cec/0mWep.1kXrwKeiWDba6tdKvDfEBjyePJnDT7K
              //adding two more fileds
              req.body.passwordExpiresIn='';
              req.body.passwordResetToken='';
               usercollectionObj.insertOne(req.body,(err,result)=>{
                if(err)
                {
                  console.log('Error occured while inseerting document',err);
                }
                else
                {
                  //console.log(result);
                  console.log('Succesfully inserted');
                  res.send({message:"Successfully Registered"});
                }
              });
          }
      
        });

             
            }
          })
        }
      });
     

});

 
  
      


//hadle login form 
router.post('/login',(req,res)=>{

  if(dbo==='undefined')
  {
    dbo.initDb();
  }
  var usercollectionObj=dbo.getDb().userCollectionObj;
  usercollectionObj.findOne({email:req.body.email},(err,userObj)=>{
    if(err)
    {
      console.log('error occured while login',err);
      //res.send({message:'pls try again later'});
    }
    else
    {
      if(userObj===null)
      {
        res.send({message:'Email not exist'});
      }
      else
      {
         bcrypt.compare(req.body.password,userObj.password,(err,result)=>{
            if(err)
            {
              console.log('error occured while login',err);
              //res.send({message:'pls try again later'});
            }
            else
            {
              if(result)
              {
                  console.log('result after passowrd compare',result);
                   //create token
                   const token=jwt.sign({_id:userObj._id},'secretkey');
                   console.log('token is ',token);
                   res.send({message:"success",signedToken:token,email:req.body.email});
              }
              else
              {
                res.send({message:'Invalid credentials!'});
              }
            }
         });
      }
    }
  });
  
});

module.exports=router;