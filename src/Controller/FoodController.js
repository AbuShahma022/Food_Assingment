const FoodModel= require('../Model/FoodItemModel')


exports.create = async (req,res)=>{
    try {
        const reqBody = req.body;
        // Create a new food item using the request body
        await FoodModel.create(reqBody);
        return res.status(200).json({ status: 'success', message: 'Data created successfully' });
    } catch (error) {
        console.error('Error creating food item:', error);
        return res.status(500).json({ status: 'error', message: 'Failed to create data' });
    }
}

exports.read = async (req,res)=>{
    try {
        const reqBody = req.body;
        // read a new food item using the request body
        const data = await FoodModel.find()
        return res.status(200).json({ status: 'success', message: 'Data find successfully',data:data });
    } catch (error) {
        console.error('Error creating food item:', error);
        return res.status(500).json({ status: 'error', message: 'Failed to find data' });
    }

}

exports.update = async (req,res)=>{
    try {
        let {id}= req.params
        
        const reqBody = req.body;
        // update a  food item using the request body
        await FoodModel.updateOne({_id:id},reqBody);
        return res.status(200).json({ status: 'success', message: 'Data update successfully' });
    } catch (error) {
        console.error('Error creating food item:', error);
        return res.status(500).json({ status: 'error', message: 'Failed to update data' });
    }

}

exports.delete = async (req,res)=>{
    try {
        let {id}= req.params
        
        const reqBody = req.body;
        // delete a  food item using the request body
        await FoodModel.deleteOne({_id:id});
        return res.status(200).json({ status: 'success', message: 'Data delete successfully' });
    } catch (error) {
        console.error('Error creating food item:', error);
        return res.status(500).json({ status: 'error', message: 'Failed to delete data' });
    }
}

exports.readByid = async(req,res)=>{

    try {
        let {id}= req.params
        // find single item using param
        const data = await FoodModel.find({_id:id})
        return res.status(200).json({ status: 'success', message: 'Data find successfully',data:data });
    } catch (error) {
        console.error('Error creating food item:', error);
        return res.status(500).json({ status: 'error', message: 'Failed to find data' });
    }
}