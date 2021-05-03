import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div style={{padding: 0, display: 'flex', justifyContent: 'space-evenly'}}>
            <Link to='/scribble-finance'>
                <div style={{marginRight: '20px'}}>Form-1</div>
            </Link>
            <Link to='/specter-finance'>
                <div style={{marginRight: '20px'}}>Form-2</div>
            </Link>
            <Link to='/specter-finance-unsecured'>
                <div style={{marginRight: '20px'}}>Form-3</div>
            </Link>
            <Link to='/specter-finance-secured'>
                <div>Form-4</div>
            </Link>
        </div>
    )
}