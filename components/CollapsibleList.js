import styles from '../styles/collapseList.module.css'

// also called: multi-level accordion menu
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
    <>
      {newrenderParent(list[0])}
      {newrenderParent(list[1])}
    </>
  )
}

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
    <li>
      <details key={'collapsible list parent' + parent.name}>
        <summary className={styles.parentWrapper}><h3 style={{ margin: '0' }}>{parent.name}</h3></summary>
        <div className={styles.childrenWrapper}><ul style={{ margin: '0' }}>{renderedChildren}</ul></div>
      </details>
    </li>
  )
}

function newrenderParent(parent) {
  const renderedChildren = parent.children.map((item, index) => {
    if (item.type === 'child') {
      return <li key={parent.name + ' child ' + index}><div>{item.name + ', ' + parent.name + ' child ' + index}</div></li>
    } else {
      // has another parent
      return newrenderParent(item)
    }
  })
  return (
    <li key={'collapsible list parent' + parent.name}>
      <div className={styles.parentWrapper} onClick={toggleChildren}><h3 style={{ margin: '0' }}>{parent.name}</h3></div>
      <div className={styles.childrenWrapper}><ul style={{ margin: '0' }}>{renderedChildren}</ul></div>
    </li>
  )
}

// an entire thread about collapse animations: https://stackoverflow.com/questions/3508605/how-can-i-transition-height-0-to-height-auto-using-css
function toggleChildren(e) {
  const parentElement = e.currentTarget
  const childrenWrapper = parentElement.nextElementSibling

  if (!childrenWrapper.style.height || childrenWrapper.style.height == '0px') { // opening a wrapper
    const addHeight = Array.prototype.reduce.call(childrenWrapper.childNodes, function (p, c) {
      return p + (c.offsetHeight || 0);
    }, 0)

    // the new height of its own wrapper
    childrenWrapper.style.height = addHeight + 'px'
    // increasing height of parent element if necessary
    updateParentHeight(parentElement, addHeight, true)

  } else { // closing a wrapper
    // decreasing height of parent element if necessary
    updateParentHeight(parentElement, childrenWrapper.style.height, false)
    // the new height of its own wrapper
    childrenWrapper.style.height = '0px';
  }
}

// When opening a child parent, the grandparent's height increased 
// a little too much, as can be seen at the bottom of the grandparent wrapper (border).
function updateParentHeight(parent, addHeight, expand) {
  const hasParent = parent.closest("." + styles.childrenWrapper)
  addHeight = expand ? addHeight : -1 * parseInt(addHeight)

  if (hasParent) {
    // updating the parent's height
    hasParent.style.height = (parseInt(hasParent.style.height.slice(0, -2)) + addHeight) + 'px'

    // checking if there is another parent that needs its height updated using recursion
    if (hasParent.closest('.' + styles.childrenWrapper + ' :not(' + 'div' + ')')) {
      updateParentHeight(hasParent.previousSibling, expand ? addHeight : -1 * parseInt(addHeight), expand)
    }
  }
}