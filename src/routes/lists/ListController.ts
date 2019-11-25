const User = require("../../models/User");
const List = require("../../models/List");
const mongoose = require("mongoose");

export class ListController {

    public createList(req: any, res: any) {
        if (!req.body.title || !req.body.userID) {
            res.status(400).send({ error: "Please specify a title and user ID for this new list" });
        }
        const newListID = mongoose.Types.ObjectId();
        List.create({
            _id: newListID,
            items: new Array,
            title: req.body.title
        });
        User.findByIdAndUpdate(
          req.body.userID,
          {$push: { Lists: newListID }},
          {upstert: true},
          (err: any, data: any) => {
            if (err) { return res.status(500).send(err); }
            return res.send(data);
          });
    }

    public getListByID(req: any, res: any) {
        List.findById(req.params.listID, function(err: any, data: any) {
            if (err) {
                res.send(err);
            } else {
                console.log(data);
                res.send(data);
            }
        });
    }

    public deleteListByID(req: any, res: any) {
      List.findByIdAndDelete(
        req.params.listID,
        (err: any, data: any) => {
          if (err) {
            res.send(err);
          } else {
            res.send(200).send();
          }
        }
      );
    }
  
    public updateListByID(req: any, res: any) {
      List.findByIdAndUpdate(
        req.params.listID, req.body, function(err: any, data: any){
            if(err){
                res.status(400).send(err);
            }

            else{
                res.status(200).send();
            }
        }
      );
    }
    
}
