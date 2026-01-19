import React from 'react'
import { Link } from 'react-router'
import {NotepadText, PlusIcon} from "lucide-react"

const Navbar = () => {
  return (
    <header className='bg-base-300 broder-b border-base-content/10'>

        <div className='mx-auto max-w-6xl px-4 py-4'>
            <div className='flex justify-between items-center'>
              <div className='flex justify-between items-center gap-1'>
                <h1 className='text-3xl font-bold text-primary font-mono tracking-tight'>ThinkPad</h1>  
                <NotepadText className='text-primary'/>
                </div>
                <div className='flex items-center gap-4'>
                    <Link to={"/create"} className='btn btn-primary'>
                    <PlusIcon className="size-5"/>
                    <span>New note</span>
                    </Link>
                </div>
            </div>

        </div>

    </header>
  )
}

export default Navbar