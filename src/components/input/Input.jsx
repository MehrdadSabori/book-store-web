import React, { useState } from 'react'
// --- icons ----
import { FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { BiSolidLockAlt } from 'react-icons/bi'

function Input(props) {
    let {onfocus, iconInput, errorMassage, onChange, ...input } = props
    const [showError, setShowError] = useState(false)
    const isOnfocuses = (e) =>{
        if(onfocus){
            onfocus(e)
        }
    }
    return (
        <div className="input_section">
            <input
                className='input'
                onChange={onChange}
                {...input}
                onBlur={() => setShowError(true)}
                onFocus={(e)=>isOnfocuses(e)}
                focus={showError.toString()}
                required
                
            />
            {iconInput === 'MdEmail' && <MdEmail className='input_icons_regiter' />}
            {iconInput === 'FaUser' && <FaUser className='input_icons_regiter' />}
            {iconInput === 'BiSolidLockAlt' && <BiSolidLockAlt className='input_icons_regiter' />}
            <span className='error_massage'>{errorMassage}</span>
        </div>
    )
}

export default Input