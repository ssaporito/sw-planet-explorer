import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Planet } from '.'

const app = () => express(apiRoot, routes)

let planet

beforeEach(async () => {
  planet = await Planet.create({name:'namePlaceholder',climate:'climatePlaceholder',terrain:'terrainPlaceholder'})
})

test('POST /planets 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'testName', climate: 'testClimate', terrain: 'testTerrain' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('testName')
  expect(body.climate).toEqual('testClimate')
  expect(body.terrain).toEqual('testTerrain')
})

test('GET /planets 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /planets/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${planet.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(planet.id)
})

test('GET /planets/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /planets/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${planet.id}`)
    .send({ name: 'test', climate: 'test', terrain: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(planet.id)
  expect(body.name).toEqual('test')
  expect(body.climate).toEqual('test')
  expect(body.terrain).toEqual('test')
})

test('PUT /planets/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', climate: 'test', terrain: 'test' })
  expect(status).toBe(404)
})

test('DELETE /planets/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${planet.id}`)
  expect(status).toBe(204)
})

test('DELETE /planets/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
