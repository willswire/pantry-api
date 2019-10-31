import mongoose from "mongoose";
import List from "../../models/List";

export class ListController {

    public createList(req: any, res: any) {
        if (!req.body.title) {
            res.status(400).send({ error: "Please specify a title for this new list" });
        }
        const newListID = mongoose.Types.ObjectId();
        List.create({
            _id: newListID,
            had: {},
            has: {},
            title: req.body.title,
            wants: {}
        }, function(err: any) {
            if (err) {
                res.send(err);
            } else {
                res.send(newListID);
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
        List.findOneAndDelete(req.params.listID, function(err: any) {
            if (err) {
                res.send(err);
            } else {
                res.send(200).send();
            }
        });
    }

}
