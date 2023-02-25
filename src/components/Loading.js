import React from 'react'

const Loading = () => {
  return (
    <div class="flex justify-center items-center h-screen">
    <div class="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 shadow-sm ">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-slate-800 rounded-full shadow-blue-400"></div>
    </div>
</div>
  )
}

export default Loading