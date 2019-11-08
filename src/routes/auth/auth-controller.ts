import { sign } from 'jsonwebtoken'
import { authenticate } from 'passport'

export class AuthController {
  public login(req: any, res: any, next: any) {
    authenticate('local', {session: false}, (err, user, info) => {
      if (err || !user) {
        return res.status(400).json({
          message: 'Something is not right',
          user   : user
        });
      }       req.login(user, {session: false}, (err) => {
        if (err) {
          res.send(err);
        }           
        const token = sign(user, 'your_jwt_secret');
        return res.json({user, token});
      });
    })(req, res);
  }
}
