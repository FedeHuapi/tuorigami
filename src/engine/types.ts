export type Vec2 = [number, number]

export interface FoldStep {
    title: string
    text: string 
    /**Un punto por donde pasa la linea de pliegue */
    through: Vec2 
    direction: Vec2
    /** Un punto cualquiera del lado que se dobla */
    moving: Vec2 
    kind: 'valle' | 'montaña'
    /** Doblar y volver a abrir: solo deja marca del pliegueu */
    crease?: boolean 
}

export interface OrigamiDef {
    id: string
    name: string
    /** Las esquinas de la hoja en orden */
    shape: Vec2[] 
    steps: FoldStep[]
}