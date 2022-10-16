import React from 'react'

const SearchBox = () => {
    return (
            <div
                class="p-5 flex rounded-xl overflow-hidden  items-center justify-center"
            >
                <form
                    action=""
                    class="focus-within:ring-2 w-100  focus-within:ring-rose-500 flex justify-between rounded-full shadow-lg bg-white"
                >
                    <input
                        type="email"
                        class="flex-1 outline-none rounded-full p-4 text-lg"
                        placeholder=" Enter your Email"
                    />
                    <button
                        class="bg-rose-500 text-white m-1 font-medium px-6 py-3 rounded-full hover:bg-rose-600"
                    >
                        Search
                    </button>
                </form>
            </div>
    )
}

export default SearchBox