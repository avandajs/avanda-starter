import { Middleware, Request, Response } from "@avanda/http";
import User from "../models/User";
export default class LoggedUserOnly implements Middleware{
    async boot(res: Response,req: Request) {

        try {
            let session = await new User().getActiveSession(req)

            req.setAttr('user_id',session.user_id)

            let user = await new User().find(session?.user_id);

            if (!user)
                throw new Error('you are not logged in')

            req.setAttr('user',user)

            return !!session?.user_id && !!user && session?.auth_stage == 'logged-in';
        }catch (e) {
            return res.error('You are not logged in')
        }
    }

}