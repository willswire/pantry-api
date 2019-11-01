const mongoClient = require('../../database');
const Item = require('../../models/Item');

export class ItemController{
    public getAllItems(req: any, res: any){
        Item.find({}, function(err: any, data: any){
            if(err){
                res.status(400).send(err);
            }
    
            else{
                res.status(200).send(data);
            }
        });
    }
    
    public getItemByID(req: any, res: any){
        Item.findById(req.params.itemID, function(err: any, data: any){
            if(err){
                res.status(400).send(err);
            }
    
            else{
                res.status(200).send(data);
            }
        });
    }
    
    public deleteItemByID(req: any, res: any){
        Item.findByIdAndDelete(req.params.itemID, function(err: any, data: any){
            if(err){
                res.status(400).send(err);
            }
    
            else{
                res.status(200).send();
            }
        });
    }

    public getItemByName(req: any, res: any){
        Item.find({"name": req.params.name}, function(err: any, data: any){
            if(err){
                res.status(400).send(err);
            }

            else{
                res.status(200).send(data);
            }
        });
    }
    
    public deleteItemByName(req: any, res: any){
        Item.deleteOne({"name": req.params.name}, function(err: any, data: any){
            if(err){
                res.status(400).send(err);
            }
    
            else{
                res.status(200).send();
            }
        });
    }
    
    public createItem(req: any, res: any){
        if(!req.body.name){
            res.status(400).send({ error: "Please provide a name for the item"});
        }
        else{
            Item.create({"name": req.body.name,
                        "lifetimesales": 0}, function(err: any, data: any){
                if(err){
                    res.status(400).send(err);
                }
                
                else{
                    res.status(200).send();
                }
            });
        }
    }

    public updateItemByID(req: any, res: any){
        Item.findByIdAndUpdate(req.params.itemID, req.body, function(err: any, data: any){
            if(err){
                res.status(400).send(err);
            }

            else{
                res.status(200).send();
            }
        });
    }

    public updateItemByName(req: any, res: any){
        Item.findOneAndUpdate({"name": req.params.name}, req.body, function(err: any, data: any){
            if(err){
                res.status(400).send(err);
            }

            else{
                res.status(200).send();
            }
        });
    }
}