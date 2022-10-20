import { makeInvoker } from "awilix-express";
import { waitListSchema } from "containers/waitList/WaitListValidation";
import { Router } from "express";
import validator from "express-joi-validation";
import CheckAuth from "interfaces/rest/middlewares/checkAuthentication";
import MethodNotAllowedHandler from "interfaces/rest/middlewares/methodNotAllowed";
import WaitListController from "./WaitListController";

const router = Router();
const api = makeInvoker(WaitListController);
const Auth = makeInvoker(CheckAuth);
const validate = validator.createValidator({
  passError: true,
});

/**
 * @api {post} /WaitList Creates WaitList
 * @apiGroup WAITLIST
 * @apiName Create WaitList
 * @apiDescription Saves WaitList to the db
 * @apiVersion 1.0.0
 * @apiParam {String} email - Email of the user
 * @apiParam {String} discord - Discord username
 * @apiParam {String} eth_address - Ethereum address
 * @apiParam {String} twitter - Twitter username
 * @apiSuccessExample Success Response:
 {
  "success": true,
  "status_code": 200,
  "message": "WaitList created successfully!",
   "data": {
        "email": "francis.igbiriki@gmail.com",
        "discord": "igmrrf",
        "twitter": "igmrrf",
        "eth_address": "0xCBD6832Ebc203e49E2B771897067fce3c58575ac",
        "_id": "6244f22a7be2d161b405f864",
        "created_at": "2022-03-31T00:13:30.062Z",
        "updated_at": "2022-03-31T00:13:30.062Z"
    },
  "links": []
}
 */

/**
 * @api {put} /WaitList/:id Updates WaitList
 * @apiGroup WAITLIST
 * @apiName Update WaitList
 * @apiDescription Updates WaitList in db
 * @apiVersion 1.0.0
 * @apiParam {String} email - Email of the user
 * @apiParam {String} discord - Discord username
 * @apiParam {String} eth_address - Ethereum address
 * @apiParam {String} twitter- Twitter username
 * @apiSuccessExample Success Response:
 {
  "success": true,
  "status_code": 200,
  "message": "WaitList updated successfully!",
   "data": {
        "email": "francis.igbiriki@gmail.com",
        "twitter": "igmrrf",
        "discord": "igmrrf",
        "eth_address": "0xCBD6832Ebc203e49E2B771897067fce3c58575ac",
        "_id": "6244f22a7be2d161b405f864",
        "created_at": "2022-03-31T00:13:30.062Z",
        "updated_at": "2022-03-31T00:13:30.062Z"
    },
  "links": []
}
 */

/**
 * @api {delete} /WaitList/:id Deletes WaitList in db
 * @apiGroup WAITLIST
 * @apiName Delete WaitList
 * @apiDescription Deletes WaitList stored in db
 * @apiVersion 1.0.0
 * @apiParam {:id} Id - WaitList Id
 * @apiSuccessExample Success Response:
{
  "success": true,
  "status_code": 200,
  "message": "WaitList deleted successfully!",
   "data": {
        "email": "francis.igbiriki@gmail.com",
        "twitter": "igmrrf",
        "discord": "igmrrf",
        "eth_address": "0xCBD6832Ebc203e49E2B771897067fce3c58575ac",
        "_id": "6244f22a7be2d161b405f864",
        "created_at": "2022-03-31T00:13:30.062Z",
        "updated_at": "2022-03-31T00:13:30.062Z"
    },
  "links": []
}
 */

/**
 * @api {get} /WaitList Gets all WaitLists in db
 * @apiGroup WAITLIST
 * @apiName Get All WaitLists
 * @apiDescription Gets all WaitLists
 * @apiVersion 1.0.0
 * @apiSuccessExample Success Response:
 * {
    "success": true,
    "status_code": 200,
    "message": "WaitList was successfully processed!",
    "data": {
        "email": "francis.igbiriki@gmail.com",
        "twitter": "igmrrf",
        "discord": "igmrrf",
        "eth_address": "0xCBD6832Ebc203e49E2B771897067fce3c58575ac",
        "_id": "6244f22a7be2d161b405f864",
        "created_at": "2022-03-31T00:13:30.062Z",
        "updated_at": "2022-03-31T00:13:30.062Z"
    },
    "links": []
* }
 */

/**
 * @api {get} /WaitList/:id Gets one WaitList from db
 * @apiGroup WAITLIST
 * @apiName Get A WaitList
 * @apiDescription Gets one WaitList from db
 * @apiVersion 1.0.0
 * @apiParam {:id} Id - WaitList Id

 * @apiSuccessExample Success Response:
 * {
  "success": true,
  "status_code": 200,
  "message": "WaitList fetched successfully!",
  "data": {
        "email": "francis.igbiriki@gmail.com",
        "twitter": "igmrrf",
        "discord": "igmrrf",
        "eth_address": "0xCBD6832Ebc203e49E2B771897067fce3c58575ac",
        "_id": "6244f22a7be2d161b405f864",
        "created_at": "2022-03-31T00:13:30.062Z",
        "updated_at": "2022-03-31T00:13:30.062Z"
    },
  "links": []
}
 */

router
  .route("/:id")
  .delete(Auth("allowAny"), api("deleteWaitList"))
  .get(Auth("allowAny"), api("getWaitList"))
  .put(Auth("allowAny"), validate.body(waitListSchema), api("updateWaitList"))
  .all(MethodNotAllowedHandler);

router
  .route("/")
  .post(Auth("allowAny"), validate.body(waitListSchema), api("createWaitList"))
  .get(Auth("allowAny"), api("getWaitLists"))
  .all(MethodNotAllowedHandler);

export default router;
