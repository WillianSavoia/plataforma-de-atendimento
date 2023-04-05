import InputMask from 'react-input-mask'
import {useState} from 'react';

export function InputMaskTel () {

    const [value, setValue] = useState("")

    return (
        <InputMask
        mask="(99) 99999-9999"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder='(XX) XXXXX-XXXX'
        required
        />
    )
}