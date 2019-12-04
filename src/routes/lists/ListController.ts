const User = require("../../models/User");
const List = require("../../models/List");
const Item = require("../../models/Item");
const mongoose = require("mongoose");

export class ListController {

    public createList(req: any, res: any) {
        if (!req.body.title || !req.body.userID) {
            res.send({ error: "Please specify a title and user ID for this new list" });
        }
        const newListID = mongoose.Types.ObjectId();
        List.create({
          _id: newListID,
          items: new Array,
          title: req.body.title,
          favorite: false,
          function(err: any, data: any) {
            if (err) {
              console.log(err);
            } else {
              console.log(data);
            }
          }
        });
        User.findByIdAndUpdate(
          req.body.userID,
          {$push: { Lists: newListID }},
          {upstert: true},
          (err: any, data: any) => {
            if (err) { return res.sendStatus(500); }
            return res.send(data);
        });
    }
  
    public addItemToList(req: any, res: any) {
        if (!req.params.listID || !req.params.itemID) {
            res.send({ error: "Please specify a item and list ID for this new list" });
        }
        List.findByIdAndUpdate(
          req.params.listID,
          {$push: { items: req.params.itemID }},
          {upstert: true},
          (err: any, data: any) => {
            if (err) {
                res.send(err);
            } else {
                console.log(data);
                res.send(data);
            }
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
            console.log(err);
          } else {
            console.log(data);
          }
      });
      User.findByIdAndUpdate(
        req.params.userID,
        {$pullAll: { Lists: [req.params.listID] }},
        {new: true},
        (err: any, data: any) => {
          if (err) { return res.send(err); }
          return res.send(data);
        });
    }
  
    public deleteItemFromList(req: any, res: any) {
      List.findByIdAndUpdate(
        req.params.listID,
        {$pullAll: { items: [req.params.itemID] }},
        {new: true},
        (err: any, data: any) => {
          if (err) { return res.send(err); }
          return res.send(data);
        });
    }
  
    public updateListByID(req: any, res: any) {
      List.findByIdAndUpdate(
        req.params.listID, req.body, function(err: any, data: any){
            if(err){
                res.sendStatus(400);
                console.log(err);
            }
            else{
                console.log(data);
            }
        }
      );
    }
    
}
