import React from 'react';
import { Navigate } from 'react-router-dom';

export default function Loading() {

    return (
        <Navigate to="/start" />
    );
}