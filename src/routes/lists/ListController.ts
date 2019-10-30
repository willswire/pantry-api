const List = require('../../models/List');
var mongoose = require('mongoose');

export class ListController {

    public createList(req: any, res: any) {
        var newListID = mongoose.Types.ObjectId();
        List.create({
            "_id": newListID,
            "has": new Object,
            "wants": new Object,
            "had": new Object
        }, function (err: any, data: any) {
            if (err) {
                res.send(err);
            }

            else {
                res.send(newListID);
            }
        });
    }

    public getListByID(req: any, res: any) {
        List.findById(req.params.listID, function (err: any, data: any) {
            if (err) {
                res.send(err);
            }

            else {
                console.log(data);
                res.send(data);
            }
        });
    }

    public deleteListByID(req: any, res: any) {
        List.findOneAndDelete(req.params.listID, function (err: any, data: any) {
            if (err) {
                res.send(err);
            }

            else {
                res.send(200).send();
            }
        });
    }


}