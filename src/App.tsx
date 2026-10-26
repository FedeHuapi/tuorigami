import { PaperScene } from "./components/PaperScene"


export default function App() {
  return (
    <>
    <h1>tuorigami</h1>
    <div style={{ height: '70vh' }}>
    <p style={{ fontFamily: 'var(--font-text)' }}>Aprendé origami paso a paso</p>
      <PaperScene />
    </div>
    </>
  ) 

}