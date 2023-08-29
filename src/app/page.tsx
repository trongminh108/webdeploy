'use client';

import styles from './page.module.css';
import HomePage from './home/page';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
        <div>
            {' '}
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button>{' '}
            <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button>{' '}
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>
        </div>
    );
}
