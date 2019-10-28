const mongoClient = require('../../database');
const Item = require('../../models/Item');

export class ItemController{
    public getAllItems(req: any, res: any){
        Item.find({}, function(err: any, data: any){
            if(err){
                res.send(err);
            }
    
            else{
                console.log(data);
                res.send(data);
            }
        });
    }
    
    public getItemByID(req: any, res: any){
        Item.find({"Name": req.params.itemID}, function(err: any, data: any){
            if(err){
                res.send(err);
            }
    
            else{
                console.log(data);
                res.send(data);
            }
        });
    }
    
    public deleteItemByID(req: any, res: any){
        Item.find({"Name": req.params.itemID}, function(err: any, data: any){
            if(err){
                res.send(err);
            }
    
            else{
                console.log(data);
                res.send(data);
            }
        });
    }
    
    
}