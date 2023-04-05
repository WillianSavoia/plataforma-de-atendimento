import { useState } from "react";
import InputMask from 'react-input-mask';

export function InputMaskRg() { 

    const [value, setValue] = useState("");

    return (

        <InputMask
        mask="99.999.999-9"
        value={value}
        onChange={(event) => setValue(event.target.value)} 
        placeholder="00.000.000-0"
        />
    )
}