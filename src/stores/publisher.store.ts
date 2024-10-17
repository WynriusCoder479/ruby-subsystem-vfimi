import { create } from 'zustand'

export interface UsePublisherStore {
	code: string
	setCode: (code: string) => void
}

export const usePublisher = create<UsePublisherStore>()(set => ({
	code: 'RUBY00000',
	setCode: code => set(() => ({ code }))
}))
