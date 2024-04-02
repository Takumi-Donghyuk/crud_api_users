const catchError=require('../utils/catchError');
const User=require('../models/User');

//Create

const create= catchError(async(req, res)=> {
    const result= await User.create(req.body);
    return res.status(201).json(result);
});


//Read

const getAll= catchError(async(req, res) => {
    const result= await User.findAll();
    return res.json(result);
}); 

const getOne=catchError(async(req, res) => {
    const { id }=req.params;
    const result= await User.findByPk(id);
    if(!result) return result.status(404).json({message: "Car not found"});
    return res.json(result);
});

//Update

const update= catchError(async(req, res)=> {
    const { id }=req.params;
    const result=await User.findByPk(id)
    if(!result) return res.sendStatus(404)
    await result.update(req.body)
    return res.json(result)
});

//Delete

const destroy= catchError(async(req, res)=> {
    const { id }=req.params;
    const result=await User.destroy({ where: {id} })
    if(!result) res.sendStatus(404)
    return res.sendStatus(204)
});

module.exports= {
    create,
    getOne,
    getAll,
    update,
    destroy
}