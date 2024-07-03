
import colorNames from 'colornames'
const input=({
    colorValue,setColorValue,setHexValue,isDarkText,setIsDarkTest
})=>{
    return(
        <form onSubmit={(e)=>e.preventDefault()}>
            <label>ADD COLOR NAME</label>
            <input
                autoFocus
                type="text"
                placeholder="Add color name"
                required
                value={colorValue}
                onChange= {(e)=>{
                    setColorValue(e.target.value)
                    setHexValue=(colorNames(e.target.value))
                }
                }
            />
                <button 
                type="button"
                onClick={()=>setIsDarkText
                (!isDarkText)}
                >
                    Toggle text Color
                </button>
        </form>
    )
}
export default Input