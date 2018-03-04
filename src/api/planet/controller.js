import { success, notFound } from '../../services/response/'
import { Planet } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Planet.create(body)    
    .then((planet) => planet.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Planet.find(query, select, cursor)
    .then((planets) => planets.map((planet) => planet.view(false)))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Planet.findById(params.id)
    .then(notFound(res))
    .then((planet) => planet ? planet.setAppearances() : null)
    .then((planet)=> planet ? planet.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Planet.findById(params.id)
    .then(notFound(res))
    .then((planet) => planet ? Object.assign(planet, body).save() : null)
    .then((planet) => planet ? planet.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Planet.findById(params.id)
    .then(notFound(res))
    .then((planet) => planet ? planet.remove() : null)
    .then(success(res, 204))
    .catch(next)
