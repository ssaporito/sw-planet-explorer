import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Planet, { schema } from './model'

const router = new Router()
const { name, climate, terrain } = schema.tree

/**
 * @api {post} /planets Create planet
 * @apiName CreatePlanet
 * @apiGroup Planet
 * @apiParam name Planet's name.
 * @apiParam climate Planet's climate.
 * @apiParam terrain Planet's terrain.
 * @apiSuccess {Object} planet Planet's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Planet not found.
 */
router.post('/',
  body({ name, climate, terrain }),
  create)

/**
 * @api {get} /planets Retrieve planets
 * @apiName RetrievePlanets
 * @apiGroup Planet
 * @apiUse listParams
 * @apiSuccess {Object[]} planets List of planets.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /planets/:id Retrieve planet
 * @apiName RetrievePlanet
 * @apiGroup Planet
 * @apiSuccess {Object} planet Planet's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Planet not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /planets/:id Update planet
 * @apiName UpdatePlanet
 * @apiGroup Planet
 * @apiParam name Planet's name.
 * @apiParam climate Planet's climate.
 * @apiParam terrain Planet's terrain.
 * @apiSuccess {Object} planet Planet's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Planet not found.
 */
router.put('/:id',
  body({ name, climate, terrain }),
  update)

/**
 * @api {delete} /planets/:id Delete planet
 * @apiName DeletePlanet
 * @apiGroup Planet
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Planet not found.
 */
router.delete('/:id',
  destroy)

export default router
