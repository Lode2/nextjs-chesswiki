import Link from 'next/link'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import Topnavbar from '../../components/topnavbar';
import Bottomnavbar from '../../components/bottomnavbar';
import HierarchicalTree from '../../components/hierarchicalTree';

export default function FirstPost() {
    const testData = {
        name: '1',
        children: [
            {
                name: '2',
                children: [
                    {
                        name: '2.2'
                    }
                ]
            },
            {
                name: '3'
            }
        ]
    }
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
                <HierarchicalTree data={testData}></HierarchicalTree>
            </div>
            <Bottomnavbar />
        </div>
    )
}
