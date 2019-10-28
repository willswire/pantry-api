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
        Item.deleteOne({"Name": req.params.itemID}, function(err: any, data: any){
            if(err){
                res.send(err);
            }
    
            else{
                res.send("deleted");
            }
        });
    }
    
    public createItem(req: any, res: any){
        if(!req.body.itemID){
            res.status(400).send({ error: "Please provide a name for the item"});
        }
        else{
            Item.create({"Name": req.body.itemID,
                        "LifetimeSales": 0}, function(err: any, data: any){
                if(err){
                    res.send(err);
                }
                
                else{
                    res.status(200).send();
                }
            });
        }
    }
}