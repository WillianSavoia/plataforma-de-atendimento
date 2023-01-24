import {useState, useEffect} from 'react'

interface useDropDownMenuProps{
    el: any;
    initialState: boolean;
}

export const  useDropDownMenu = ({el, initialState}: useDropDownMenuProps) =>{
    const [isActive, setIsActive] = useState(initialState);

    useEffect(() =>{
         const onClick = (e: MouseEvent)=>{
            if(el.current !== null && !el.current.contains(e.target)){
                setIsActive(!isActive)
            }
        }

        if(isActive) {
            window.addEventListener("click", onClick)
        }

        return() =>{
            window.removeEventListener("click", onClick)
        }
}, [isActive, el])

    return [isActive, setIsActive]
}