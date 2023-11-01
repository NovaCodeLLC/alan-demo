import {Html, Head, Main, NextScript} from 'next/document'
import {styled, Theme, ThemeProvider} from '@mui/material/styles';
import {customTheme} from '@components/styles/global';
import {css} from '@emotion/react';
import Header from '@components/components/Header';

export default function Document() {
    const Body = styled('html')(({ theme } : {theme: Theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : '#ffffff',
    }));

    return (
            <Html lang="en">
                <Head/>
                <Header/>
                <ThemeProvider theme={customTheme}>
                    <Body>
                        <Main/>
                        <NextScript/>
                    </Body>
                </ThemeProvider>
            </Html>
    )
}
