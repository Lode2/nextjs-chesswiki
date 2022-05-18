import Link from 'next/link'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import Topnavbar from '../../components/topnavbar';
import Bottomnavbar from '../../components/bottomnavbar';

export default function FirstPost() {
    return (
        <div style={{
            backgroundColor: '#232323',
            color: 'white',
        }}>
            <Head>
                <title>Chesswiki</title>
            </Head>
            <Topnavbar />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                hi
            </div>
            <Bottomnavbar />
        </div>
    )
}
