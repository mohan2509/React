import React from "react"

const Square=({"colorValue,hexValue,isDarkText"})
=>{
    return(
        <section
            className="square"
            style={{
                backgroundColor: colorValue,
                color: isDarkText? "000" : "#FFF"
            }}
        >
            <P>{colorValue? colorValue: "emptyValue"}</P>
            <p>{hexValue? hexValue: null}</p>
        </section>
    )
}
Square.defaultProps={colorValue:"empty color value"}
export default Square;