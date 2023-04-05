import { useState } from "react";
import InputMask from 'react-input-mask';

export function InputMaskCpf() { 

    const [value, setValue] = useState("");

    return (

        <InputMask
        mask="999.999.999-99"
        value={value}
        onChange={(event) => setValue(event.target.value)} 
        placeholder="000.000.000-00"
        />
    )
}