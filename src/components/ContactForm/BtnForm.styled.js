import styled from "styled-components";

export const BtnForm = styled('button')(() => {
    return {
        fontSize: '18px',
        borderRadius: '10px',
        border: '1px solid #000',
        background: 'linear-gradient(90deg, rgba(131,58,180,1) 55%, rgba(146,29,253,1) 45%, rgba(252,176,69,1) 100%)',
        padding: '5px',
        margin: 'auto',
        cursor: 'pointer',
        '&:hover':{
            background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,86,1) 73%, rgba(252,176,69,1) 100%)',
        }
    }
})