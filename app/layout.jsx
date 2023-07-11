import '@styles/globals.css';
import { Children } from 'react';

export const metadata = {
    title: 'Promtopia',
    description: 'Discover & share AI Prompts'
};

const RootLayout = ({ Children }) => {
    return (

        <html lang='en'>
            <body>
                <div className='main'>
                    <div className='gradient' />
                </div>
                <main className='app'>
                    {Children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout;