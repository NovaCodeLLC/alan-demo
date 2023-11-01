import React from 'react';
import {Container, Link} from '@mui/material';

function Header() {
    const links = [
        { href: '/settings', label: 'Settings' },
        { href: '/', label: 'Home' },
        { href: '/demo', label: 'Demo' },
    ];

    return (
        <Container className={'flex flex-row w-full justify-center'}>
            {
                links.map(({ href, label }) => (<Link key={href} href={href} className={'mr-3'}>{label}</Link>))
            }
        </Container>
    );
}

export default Header;
