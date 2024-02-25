import './style.css'
import './topics/01-basic-types.ts'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
 Hola mundo
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
