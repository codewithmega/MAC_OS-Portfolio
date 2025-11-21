import { navIcons, navLinks } from '#constants'
import React from 'react'
import dayjs from 'dayjs'

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src="/public/images/logo.png" className='start_logo' alt="logo"/>
            <p className='font-bold'>CodewithMEGA's Porfolio</p>

            <ul>
                {navLinks.map(({id, name}) => (
                    <li key={id}>
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
    </nav>
  )
}

export default Navbar