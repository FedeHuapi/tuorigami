import type { FoldStep } from '../engine/types'

export const marcarElCentro: FoldStep = {
    title: 'Marcar el centro',
    text: 'Doblar la hoja por la mitad y desdoblarla para marcar el centro.',
    through: [0, 0],
    direction: [0, 1],
    moving: [1, 1],
    kind: 'valle',
    crease: true
}