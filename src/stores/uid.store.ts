import { create } from 'zustand'

export interface UsePublisherStore {
	uid: string
	setUid: (code: string) => void
}

export const useUid = create<UsePublisherStore>()(set => ({
	uid: '',
	setUid: uid => set(() => ({ uid }))
}))
