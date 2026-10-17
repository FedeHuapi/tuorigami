import type { Vec2 } from './types'

/**
 * Dice de qué lado de una línea está un punto.
 * Positivo: izquierda. Negativo: derecha. Cero: sobre la línea.
 * (Mirando en el sentido de `direction`.)
 */

export function sideOf(point: Vec2, through: Vec2, direction: Vec2): number {
    // Paso 1: que tan lejos está el punto del inicio de la línea
    const c = point[0] - through[0]
    const d = point[1] - through[1]

    const a = direction[0]
    const b = direction[1]
    return a * d - b * c
}

