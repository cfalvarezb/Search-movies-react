import React, { Component } from 'react';
import { ButtoBackToHome } from '../components/ButtonBackToHome';

export const NotFound = () => (
    <div>
        <h1 style={{ color: '#000', fontSize: 30 }} >404!</h1>
        <h2>Pagina No existe</h2>
        <ButtoBackToHome />
    </div>
)