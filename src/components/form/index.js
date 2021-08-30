import React from 'react';
import { Container, base, Error, Title, Text, TextSmall, Link, Input, Submit } from './styles/form';

export default function Form({ children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}