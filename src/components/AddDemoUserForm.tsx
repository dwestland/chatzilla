'use client'
import React from 'react'
import { addDemoUser } from '@/actions/AddDemoUserActions'
import { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function AddDomoUserForm() {
  const ref = useRef<HTMLFormElement>(null)
  const notify = () =>
    toast('Demo User Added', {
      // theme: 'colored',
    })

  return (
    <form
      ref={ref}
      className="space-y-4"
      action={async (formData) => {
        await addDemoUser(formData)
        ref.current?.reset()
        notify()
      }}
    >
      <ToastContainer />
      <div>
        <label
          htmlFor="businessName"
          className="block font-medium text-gray-600 dark:text-gray-400"
        >
          Business Name
        </label>
        <input
          type="text"
          name="businessName"
          // id="businessName"

          className="w-full p-2 mt-1 transition border-2 border-gray-300 rounded-md dark:bg-gray-700 focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div>
        <label
          htmlFor="managerName"
          className="block font-medium text-gray-600 dark:text-gray-400"
        >
          Manager Name
        </label>
        <input
          type="text"
          name="managerName"
          // id="managerName"
          className="w-full p-2 mt-1 transition border-2 border-gray-300 rounded-md dark:bg-gray-700 focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block font-medium text-gray-600 dark:text-gray-400"
        >
          Phone
        </label>
        <input
          type="text"
          name="phone"
          // id="phone"
          className="w-full p-2 mt-1 transition border-2 border-gray-300 rounded-md dark:bg-gray-700 focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div>
        <label
          htmlFor="zip"
          className="block font-medium text-gray-600 dark:text-gray-400"
        >
          Zip
        </label>
        <input
          type="text"
          name="zip"
          // id="zip"
          className="w-full p-2 mt-1 transition border-2 border-gray-300 rounded-md dark:bg-gray-700 focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div>
        <button
          type="submit"
          className="px-4 py-2 mt-4 text-white transition bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
