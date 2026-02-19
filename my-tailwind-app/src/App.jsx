import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  

  return (
    <div className='min-h-screen bg-gray-500 flex items-center justify-center p-4'>
      <div className='bg-white shadow-xl rounded-xl p-8 w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>
            Create Account
        </h2>
        <form action="" className='space-y-4'>
          {/* Name */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>Full Name</label>
            <input type="text" className='mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500focus:outline-none' />
          </div>
          {/* Email */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>Email Address</label>
            <input type="email" className='mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500focus:outline-none' />
          </div>
          {/* Password */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>Password</label>
            <input type="password" className='mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500focus:outline-none' />
          </div>
          {/* Confirm Password */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>Password</label>
            <input type="password" className='mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500focus:outline-none' />
          </div>
          {/* Gender */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>Gender</label>
            <div className='flex gap-4'>
              <label className='flex items-center gap-2'>
                <input type="radio" name='gender' value="Male" />
                Male
              </label>
              <label className='flex items-center gap-2'>
                <input type="radio" name='gender' value="Female" />
                Female
              </label>
            </div>
          </div>
          {/* Terms and Conditions */}
          <div className='flex items-center gap-2'>
            <input type="checkbox" className='w-4 h-4' />
            <label htmlFor="" className='text-sm text-gray-600'>I agree to the Terms & Conditions</label>
          </div>
          {/* Submit Button */}
          <button type='submit' className='w-full bg-blue-600 text-white py-2 rounded-lg font-semibold
          hover:bg-blue-800 transition duration-300'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default App
