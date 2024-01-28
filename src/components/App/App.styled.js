import styled from "styled-components";

export const Container = styled('div')(()=> {
    return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 18,
        color: '#010101',
        background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(231,175,204,1) 8%, rgba(148,187,233,1) 100%)',

    }
})