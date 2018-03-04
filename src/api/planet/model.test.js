import { Planet } from '.'

let planet

beforeEach(async () => {
  planet = await Planet.create({ name: 'test', climate: 'test', terrain: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = planet.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(planet.id)
    expect(view.name).toBe(planet.name)
    expect(view.climate).toBe(planet.climate)
    expect(view.terrain).toBe(planet.terrain)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = planet.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(planet.id)
    expect(view.name).toBe(planet.name)
    expect(view.climate).toBe(planet.climate)
    expect(view.terrain).toBe(planet.terrain)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
