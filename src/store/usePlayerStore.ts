import { create, StoreApi } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { Video } from '../types/player.type'

interface IPlayerStore {
  _hasHydrated: boolean
  setHasHydrated: (hydrated: boolean) => void
  videoSelected: any
  setVideoSelected: (video: any) => void
  files: any
  setFiles: (files: any) => void
}

type IRehydrateStorageSlice = Pick<
  IPlayerStore,
  '_hasHydrated' | 'setHasHydrated'
>
type IPlayerSlice = Pick<
  IPlayerStore,
  'videoSelected' | 'setVideoSelected' | 'files' | 'setFiles'
>

const rehydrateStorageSlice = (
  set: StoreApi<IRehydrateStorageSlice>['setState']
) => ({
  _hasHydrated: false,
  setHasHydrated: (hydrated: boolean) => set({ _hasHydrated: hydrated }),
})

const playerSlice = (set: StoreApi<IPlayerSlice>['setState']) => ({
  videoSelected: {},
  setVideoSelected: (video: Video | {}) => set({ videoSelected: video }),
  files: [],
  setFiles: (files: Video[]) => set({ files }),
})

const playerStore = (set: StoreApi<IPlayerStore>['setState']) => ({
  ...rehydrateStorageSlice(set),
  ...playerSlice(set),
})

export const usePlayerStore = create(playerStore)

// export const usePlayerStore = create(
//   persist(immer(playerStore), {
//     name: 'playerStore',
//     onRehydrateStorage: () => (state) => {
//       state?.setHasHydrated(true)
//     },
//   })
// )
