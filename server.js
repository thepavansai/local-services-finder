import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyparser from 'body-parser';

//Intialization
const app= express();
const PORT=5000;

//middlewares body-parser
app.use(cors());
app.use(bodyparser.json());

//db connection
mongoose.connect('mongodb://localhost/27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const ServiceSchema= new mongoose.Schema({
    name:String,
    type:String,
    rating:Number,
    contact:String,
    pinCode:String
});
//model for services
const Service = mongoose.model('Service',ServiceSchema);
//routes for get and post

app.get('/services',async(req, res)=>{
    const services= await Service.find();
    res.json(services);
})
app.post('/services',async(req,res)=>{
    const service = new Service(req.body);
    await service.save();
    res.json(service);
});
app.get('/services/pin',async(req, res)=>{
    const{pinCode}=req.query;
    //console.log(pinCode)
    const services= await Service.find({pinCode: pinCode});
    res.json(services);
})
app.delete('/services/name',async(req,res)=>{
    const {name}=req.query;
    const service=await Service.findOneAndDelete({name:name});
    if(!service){
        return res.status(404).json({message:"Service not found"});
    }
    res.json({message:"Service deleted sucessfully"})
})

//starting server

app.listen(PORT,()=>{
    console.log(`Server running at port : ${PORT}`);
});