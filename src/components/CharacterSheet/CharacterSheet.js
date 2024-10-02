import React, { useState } from 'react'
import Attribute from '../Attribute/Attribute'
import { CLASS_LIST } from '../../consts.js';
import CharacterClass from '../CharacterClass/CharacterClass.js';

const initialCharacterValues = {
    Strength: 10, Dexterity: 10, Constitution: 10, Intelligence: 10, Wisdom: 10, Charisma: 10
}

function CharacterSheet() {
    const [characterAttributes, setAttributes] = useState(initialCharacterValues)
    const [characterName, setCharacterName] = useState("")

    let uploadCharactertoServer = async () => {
        if (characterName.length === 0) {
            alert("You need to add a name silly adventurer!")
        }
        try {
            await fetch('https://recruiting.verylongdomaintotestwith.ca/api/{{github_username}}/character', {
                method: 'POST', headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(characterAttributes)
            })
        } catch (error) {
            console.log("There was an error uploading to server", error)
        }
    }

    let getCharacterFromServer = async () => {
        if (characterName.length === 0) {
            alert("You need to add a name silly adventurer!")
        }
        try {
            let response = await fetch('https://recruiting.verylongdomaintotestwith.ca/api/{{github_username}}/character', {
                headers: { 'Content-Type': 'application/json', }
            })
            let parsedResponse = await response.json()
            setAttributes(parsedResponse.body)

        } catch (error) {
            console.log("There was an error downloading from the server", error)
        }
    }

    return (
        <div className='character-sheet-container'>
            <input placeholder='CharacterName' type="text" value={characterName} onChange={(e) => setCharacterName(e.target.value)} />
            <button onClick={uploadCharactertoServer}>Upload</button>
            <button onClick={getCharacterFromServer}>Retreive Character</button>
            <div className='attributes'>
                {Object.entries(characterAttributes).map(([attributeName, attributeValue]) => (
                    <Attribute key={attributeName} attributeName={attributeName} attributeValue={attributeValue} setAttributes={setAttributes} characterAttributes={characterAttributes} />
                ))}
            </div>
            <div className='classes' >
                {Object.entries(CLASS_LIST).map(([className, classStats]) => (
                    <CharacterClass key={className} characterAttributes={characterAttributes} className={className} classStats={classStats} />
                ))}
            </div>
        </div>
    )
}

export default CharacterSheet