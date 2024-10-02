import React from 'react'

function Attribute({ attributeName, attributeValue, characterAttributes, setAttributes }) {
    
    const addIncrementToValue = (passedAttributeName) => {
        setAttributes({...characterAttributes, [passedAttributeName]: attributeValue + 1})
    }

    const subtractIncrementFromValue = (passedAttributeName) => {
        setAttributes({...characterAttributes, [passedAttributeName]: attributeValue - 1})
    }

    const calculateAbilityScoreModifier = () => {
        return Math.floor((attributeValue - 10) / 2)
    }

    return (
        <div>
            <span>{attributeName}: </span>
            <span>{attributeValue}:</span>
            <button onClick={() => subtractIncrementFromValue(attributeName)}>-</button>
            <button onClick={() => addIncrementToValue(attributeName)}>+</button>
            <span>Modifier: </span>
            <span>{calculateAbilityScoreModifier()}</span>

        </div>
    )
}

export default Attribute