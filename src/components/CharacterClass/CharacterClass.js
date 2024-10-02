import React from 'react'

function CharacterClass({ className, classStats, characterAttributes }) {

    const ifAllCharacterAttributeAreGreaterThanTheClassRequirement = () => {
        let allAttributesAreMet = true
        Object.entries(characterAttributes).forEach(([attributeName, attributeValue]) => {
            if (attributeValue < classStats[attributeName]) {
                allAttributesAreMet = false
            }
        })
        return allAttributesAreMet
    }

    return (
        <div>
            <div style={{ background: ifAllCharacterAttributeAreGreaterThanTheClassRequirement() ? "green" : "" }}>{className} </div>
        </div>


    )
}

export default CharacterClass