import Link from 'next/link'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import Topnavbar from '../../components/topnavbar';
import Bottomnavbar from '../../components/bottomnavbar';
import HierarchicalTree from '../../components/hierarchicalTree';

export default function treeStructure() {
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
        <div style={{ height: 'auto', display: 'flex', justifyContent: 'center', border: 'red dotted 2px' }}>
            <HierarchicalTree data={testData}></HierarchicalTree>
        </div>
    )
}
