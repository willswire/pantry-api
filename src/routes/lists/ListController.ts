const mongoClient = require('../../database');
const Item = require('../../models/Item');

export class ListController {

    public createList(req: any, res: any) {
        if (!req.body.itemID) {
            res.status(400).send({ error: "Please provide a name for the list" });
        }
        else {
            Item.create({
                "Name": req.body.itemID,
                "LifetimeSales": 0
            }, function (err: any, data: any) {
                if (err) {
                    res.send(err);
                }

                else {
                    res.status(200).send();
                }
            });
        }
    }

    public getListByID(req: any, res: any) {
        Item.find({ "Name": req.params.itemID }, function (err: any, data: any) {
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
        Item.deleteOne({ "Name": req.params.itemID }, function (err: any, data: any) {
            if (err) {
                res.send(err);
            }

            else {
                res.send("deleted");
            }
        });
    }


}