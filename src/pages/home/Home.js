import React from 'react'
import PrimarySearchAppBar from '../../component/primarySearchAppBar/PrimarySearchAppBar';
import PersistentDrawerLeft from '../../component/mainContentWithDrawer/PersistentDrawerLeft';

export default function Home() {
    return (
        <>
        <div><PrimarySearchAppBar /></div>
        <div><PersistentDrawerLeft /></div>
        </>
    )
}
