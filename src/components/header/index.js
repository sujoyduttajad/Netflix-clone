import React from 'react'

export default function Header({ bg = true, children, ...restProps }) {
    return (
        bg ? <Background {...restProps}>{children}</Background> : children
    )
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}
