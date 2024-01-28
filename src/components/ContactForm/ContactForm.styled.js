import styled from "styled-components"

export const Form = styled('form')(() =>{
    return {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        border: '3px solid #7008b5',
        padding: '20px',
        borderRadius: '10px',
        width: '450px',
        background:'#FFFFFF'
    }
})