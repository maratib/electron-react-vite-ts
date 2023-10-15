import { useState } from 'react'

const Versions = () => {
  const [versions] = useState(window.electron.process.versions)
  return (
    <div>
      <span className="pr-4">
        Electron <span className="text-red-600">v{versions.electron}</span>
      </span>
      <span className="pr-4">
        Chromium <span className="text-red-600">v{versions.chrome}</span>
      </span>
      <span className="pr-4">
        Node <span className="text-red-600">v{versions.node}</span>
      </span>
      <span className="pr-4">
        V8 <span className="text-red-600">v{versions.v8}</span>
      </span>
    </div>
  )
}
export default Versions

