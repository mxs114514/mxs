import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai'

const count = atom(0)
const doubleCount = atom((get) => get(count) * 2)
const increment = (get, set) => set(count, get(count) + 1)

const App = () => {
    const [countValue, setCountValue] = useAtom(count)
    const doubled = useAtomValue(doubleCount)
    const incrementCount = useSetAtom(increment)

    return (
        <>
            <h1>{countValue} around here ...</h1>
            <h1>Double: {doubled}</h1>
            <button onClick={incrementCount}>one up</button>
        </>
    )
}
