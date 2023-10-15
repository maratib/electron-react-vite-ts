import { ElectronAPI } from '@electron-toolkit/preload'
import ApiRenderer from './ApiRenderer'

declare global {
  interface Window {
    electron: ElectronAPI
    api: ApiRenderer
  }
}
