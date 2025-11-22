import { techStack } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper';
import { Check } from 'lucide-react';
import React from 'react'

const Terminal = () => {
  return (
    <>
        <div id="window-header p-4" className='border-b border-gray-300 flex flex-row p-4 window-header'>
            <p>Window Controls</p>
            <h2 className='window-title'>Tech Stack</h2>
        </div>
        <div className='techstack'>
            <p>
                <span className='font-bold'>@adrian %</span>
                show tech stack
            </p>

            <div className='label'>
                <p className='w-32'>Category</p>
                <p>Technologies</p>
            </div>
            
            <ul className='content'>
                {techStack.map(({category, items})=> (
                    <li key={category} className="flex items-center">
                        <Check className='check' size={20} />
                        <h3>{category}</h3>
                        <ul>
                            {items.map((item, i) => (
                                <li key={i}>{item},</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>


        </div>
    </>
  )
}

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
