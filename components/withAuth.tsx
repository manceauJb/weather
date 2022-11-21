import React, { useEffect } from 'react';
import router from 'next/router';
import { getAuth } from "firebase/auth";
import firebaseApp from '../services/firebase';

const auth = getAuth(firebaseApp);

export default function WithAuth(Component) {
    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
        if (!authUser) {
            router.push('/signin');
        }
        });
    }, []);

    return <Component {...props} />;
};