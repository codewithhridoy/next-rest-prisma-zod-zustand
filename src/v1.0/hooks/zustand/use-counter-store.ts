import { create } from 'zustand'

type State = {
  count: number
}

type Action = {
  incrementCount: () => void
  decrementCount: () => void
  resetCount: () => void
}

export const useCounterStore = create<State & Action>(set => ({
  count: 0,
  incrementCount: () => set(state => ({ count: state.count + 1 })),
  decrementCount: () => set(state => ({ count: state.count - 1 })),
  resetCount: () => set({ count: 0 })
}))
