import CollapsibleList from '../../components/CollapsibleList'

export default function testList() {
    const list = [
        {
            name: 'Rúy Lopez', type: 'parent', children: [
                { name: 'mainline', type: 'child' },
                { name: 'sideline', type: 'child' },
                { name: 'sideline', type: 'child' },
                { name: 'sideline', type: 'child' },
                { name: 'sideline', type: 'child' },
            ]
        },
        {
            name: 'Giucci Piano', type: 'parent', children: [
                { name: 'mainline', type: 'child' },
                {
                    name: 'second mainline', type: 'parent', children: [
                        { name: 'sideline 1', type: 'child' },
                        { name: 'sideline 2', type: 'child' },
                        {
                            name: 'sideline 3', type: 'parent', children: [
                                { name: 'sideline 1', type: 'child' },
                                { name: 'sideline 2', type: 'child' },
                            ]
                        },
                        { name: 'sideline 4', type: 'child' },
                    ]
                },
                { name: 'sideline 1', type: 'child' },
                { name: 'sideline 2', type: 'child' },
                { name: 'sideline 3', type: 'child' },
                { name: 'sideline 4', type: 'child' },
            ]
        }
    ]

    return (
        <div>
            <CollapsibleList listStructure={list} />
        </div>
    )
}
