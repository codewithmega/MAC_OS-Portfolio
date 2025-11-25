import { navIcons, navLinks } from '#constants'
import React from 'react'
import dayjs from 'dayjs'
import useWindowStore from '#store/window'

const Navbar = () => {

    const {openWindow} = useWindowStore();

  return (
    <div className='nav z-51'>
        <div>
            <img src="/images/logo.png" className='start_logo' alt="logo"/>
            <p className='font-bold'>MEGA ✨</p>

            <ul>
                {navLinks.map(({id, name, type}) => (
                    <li key={id} onClick={() => openWindow(type) }>
                        <p>{name}</p>
                    </li>
                ))}
            </ul>

        </div>

        <div>
            <ul>
                {navIcons.map(({id, img}) => (
                    <li key={id}>
                        <img src={img} className='icon-hover task_icon' alt={`icon-${id}`} />
                    </li>
                ))}
            </ul>

            <time>{dayjs().format("ddd MMM D h:mm A")}</time>
        </div>
    </div>
  )
}

export default Navbar