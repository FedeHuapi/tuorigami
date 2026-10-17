import { describe, expect, it } from 'vitest'
import { sideOf } from './geometry'

describe('sideOf con la línea vertical del centro', () => {
    const through: [number, number] = [0, 0]
    const direction: [number, number] = [0 , 1]

    it('un punto a la izquierda da positivo', () => {
        expect(sideOf([-1, 0], through, direction)).toBeGreaterThan(0)
    })

    it('un punto a la derecha da negativo', () => {
        expect(sideOf([1,1], through, direction)).toBeLessThan(0)
    })

    it('un punto sobre la linea da cero', () => {
        expect(sideOf([0, 0.5], through, direction)).toBe(0)
    })
})