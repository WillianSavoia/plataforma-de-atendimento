import InputMask from "react-input-mask";

import {useState} from 'react';

export function InputMaskCnpj () {


    const [value, setValue] = useState('')

    return (
        <InputMask
        mask="99.999.999/9999-99"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="00.000.000/0000-00"
        />
    )
}