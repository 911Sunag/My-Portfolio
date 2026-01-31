

interface MyProjectsProps {
  onClose: () => void;
}


const MyProjects = ({onClose}: MyProjectsProps) => {
  return (
    <section className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      w-155 h-105
      rounded-xl
      bg-white/20 backdrop-blur-xl
      border border-white/30
      shadow-[0_30px_60px_rgba(0,0,0,0.35)]
      z-1000
      overflow-hidden
    ">
      <div className="h-10 px-4 flex items-center justify-between
        bg-white/25 backdrop-blur-md
        border-b border-white/20
      ">
        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-400"
          />
        </div>

        <h1 className="text-lg font-medium text-white/90 select-none font-pop">
          Projects
        </h1>
        <div className="w-12" />
      </div>
      <div className="h-[calc(100%-40px)] p-4">
        <div className="w-full h-full rounded-lg
          bg-white/30 backdrop-blur-md
          border border-white/20
          shadow-inner
          flex flex-col items-center
        ">
        </div>
      </div>
    </section>
  )
}

export default MyProjects