import { create } from 'zustand'

interface UseRejectStore {
	reject: boolean
	setReject: (stateData: boolean) => void
}

export const useReject = create<UseRejectStore>()(set => ({
	reject: false,
	setReject: stateData => set(state => ({ ...state, reject: stateData }))
}))
