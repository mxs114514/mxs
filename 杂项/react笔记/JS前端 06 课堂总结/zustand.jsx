import create from 'zustand'

const useBearStore = create((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
}))

const AnyComponentOne = () => {
    const bears = useBearStore((state) => state.bears)
    return <h1>{bears} around here ...</h1>
}

const AnyComponentTwo = () => {
    const increasePopulation = useBearStore((state) => state.increasePopulation)
    return <button onClick={increasePopulation}>one up</button>
}

const App = () => (
    <>
        <div>
            <AnyComponentOne />
        </div>
        <div>
            <div>
                <AnyComponentTwo />
            </div>
        </div>
    </>
)
