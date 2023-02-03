import React, { useEffect } from 'react';

export function Logout() {
    const handleLogout = () => {
        localStorage.removeItem('token');
        alert('Vous avez été déconnecté !');
        window.location.href = '/listEnchere';
    }
    useEffect(() => {
        handleLogout();
    }, []);

    return null;
}
