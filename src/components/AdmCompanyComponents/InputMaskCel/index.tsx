import InputMask from 'react-input-mask'
import {useState} from 'react';

export function InputMaskCel () {

    const [value, setValue] = useState("")

    return (
        <InputMask
        mask="(99) 99999-9999"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder='(00) 90000-0000'
        required
        />
    )
}