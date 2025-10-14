const Skeleton = () => {
  return (
    
     <div
      role="status"
      aria-label="Loading blog list"
      className="mx-auto  mt-10 max-w-screen-md space-y-4 animate-pulse px-4"
    >
      {Array.from({ length: 4 }).map((_, i) => (
        <article
          key={i}
          className="border-b border-slate-200 pb-4 pt-4 cursor-pointer"
          aria-hidden="true"
        >
          {/* row: avatar + small meta */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0" />

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="h-3 bg-gray-200 rounded-full w-32" />
                <div className="h-2 bg-gray-200 rounded-full w-20" />
              </div>

              {/* title */}
              <div className="mt-3 h-4 bg-gray-200 rounded w-3/4" />

              {/* short excerpt */}
              <div className="mt-2 space-y-2">
                <div className="h-3 bg-gray-200 rounded w-full" />
                <div className="h-3 bg-gray-200 rounded w-5/6" />
              </div>

              {/* footer meta */}
              <div className="mt-3 flex items-center gap-3">
                <div className="h-2 bg-gray-200 rounded w-24" />
                <div className="h-2 bg-gray-200 rounded w-16" />
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>

  )
}

export default Skeleton