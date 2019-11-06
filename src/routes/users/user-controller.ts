import { sign } from "jsonwebtoken";
import { config } from "../../config/config";
const User = require('../../models/user');

function generateToken(user: any) {
  return sign(user, config.secret, {
    expiresIn: 10080 // in seconds
  });
}

export class UserController {

  public createUser(req: any, res: any) {
    if(
      !req.body.name ||
      !req.body.birthday ||
      !req.body.gender ||
      !req.body.lists ||
      !req.body.username ||
      !req.body.password
    ) {
      res.status(400).send({
        error: 'Please provide all required information for user registration'
      });
    } else {
      User.create({
      "Name" : req.body.name,
      "Birthday" : req.body.birthday,
      "Gender" : req.body.gender,
      "Lists" : req.body.lists,
      "Username" : req.body.username,
      "Password" : req.body.password
      }, (err: any, data: any) => {
        if(err) {
          res.send(err);
        } else {
          res.status(200).send();
        }
      });
    }
  }

  public getUsers(req: any, res: any) {
    User.find({}, (err: any, data: any) => {
      if(err) {
        res.send(err);
      } else {
        console.log(data);
        res.send(data);
      }
    });
  }

  public getUser(req: any, res: any) {
    User.find({'Username': req.params.username}, (err: any, data: any) => {
      if (err) {
        res.send(err);
      } else {
        console.log(data);
        res.send(data);
      }
    });
  }

  public getUserLists(req: any, res: any) {
    User.find({'Username': req.params.username}, (err: any, data: any) => {
      if (err) {
        res.send(err);
      } else {
        console.log(data.lists);
        res.send(data.lists);
      }
    });
  }

  public updateUser(req: any, res: any) {
    User.findByIdAndUpdate(
      req.params.username,
      req.body,
      {new: true},
      (err: any, data: any) => {
        if (err) return res.status(500).send(err);
        return res.send(data);
      });
  }

  public deleteUser(req: any, res: any) {
    User.findByIdAndRemove(
      req.params.username,
      (err: any, data:any) => {
        if (err) return res.status(500).send(err);
        const response = {
          message: "User successfully deleted",
          id: data._id
        };
        return res.status(200).send(response);
      }
    );
  }
}
