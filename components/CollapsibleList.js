// import styles from './'

export default function CollapsibleList(props) {
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
            { name: 'sideline 3', type: 'child' },
          ]
        },
        { name: 'sideline 1', type: 'child' },
        { name: 'sideline 2', type: 'child' },
        { name: 'sideline 3', type: 'child' },
        { name: 'sideline 4', type: 'child' },
      ]
    }
  ]
  function renderParent(parent) {
    const renderedChildren = parent.children.map((item, index) => {
      if (item.type === 'child') {
        return <li key={parent.name + ' child ' + index}><div>{item.name + ', ' + parent.name + ' child ' + index}</div></li>
      } else {
        // another parent
        return renderParent(item)
      }
    })
    return (
      <div>
        <div className="parentWrapper"><h3 style={{ margin: '0' }}>{parent.name}</h3></div>
        <div className="childrenWrapper"><ul style={{ margin: '0' }}>{renderedChildren}</ul></div>
      </div>
    )
  }
  return (
    <>
      {renderParent(list[0])}
      {renderParent(list[1])}

    </>
  )
}


// TEMPLATE:
// <>
//   <div>
//     Listname
//     <ul>
//       <li>
//         <div>Parent: Ruy</div>
//         <div>
//           <ul>
//             <li><div>Mainline</div></li>
//             <li><div>sideline 1</div></li>
//             <li><div>sideline 2</div></li>
//             <li><div>sideline 3</div></li>
//             <li><div>sideline 4</div></li>
//           </ul>
//         </div>
//       </li>
//       <li>
//         <div>Parent: Giucci Piano</div>
//         <div>
//           <ul>
//             <li><div>Mainline</div></li>
//             <li>
//               <div>Parent: second mainline</div>
//               <div>
//                 <ul>
//                   <li><div>sideline 1</div></li>
//                   <li><div>sideline 2</div></li>
//                   <li><div>sideline 3</div></li>
//                 </ul>
//               </div>
//             </li>
//             <li><div>sideline 1</div></li>
//             <li><div>sideline 2</div></li>
//             <li><div>sideline 3</div></li>
//             <li><div>sideline 4</div></li>
//           </ul>
//         </div>
//       </li>
//     </ul>
//   </div>
// </>