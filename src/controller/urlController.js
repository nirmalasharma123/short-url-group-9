const urlModel=require("../models/urlModel");
const validUrl=require("valid-url");
const shortId=require("shortid")
const makeShortUrl= async function(req,res){
    try{
    let data=req.body;
    if(Object.keys(data).length==0) return res.status(400).send({satus:false,msg:"please put a url"});
    if(!validUrl.isUri(req.body.longUrl)) return res.status(400) .send({satus:false,msg:"please put a  valid url"});
    let findUrl=await urlModel.findOne({longUrl:data.longUrl});
    if(findUrl) return res.status(200).send({satus:true,data:findUrl});
    data.urlCode=shortId.generate();
    data.shortUrl=`localhost:3000/${data.urlCode}`;

    let newShortedUrl= urlModel.create(data);

    return res.status(200).send({status:true,data:newShortedUrl})}
    catch(error){
        return res.status(500).send({satus:false,msg:error.message})
    }
     
    
     

};


const reDirect=async function(req,res){
   try{
    let data=req.params.urlCode;
    if(!validUrl.isUri(req.params.urlCode)) return res.status(400).send({satus:false,msg:"invalid url code"});
    let findUrl=await urlModel.findOne({urlCode:data.urlCode});
    if(!findUrl) return res.status(404).send("con't find url code");

    return res.status(302).reDirect(findUrl)}
    catch(error){
        return res.status(500).send({satus:false,msg:error.message})
    }

}





module.exports={makeShortUrl,reDirect};