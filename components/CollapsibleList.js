import styles from '../styles/collapsibleList.module.css'

// also called: multi-level accordion menu
export default function CollapsibleList(props) {
  return (
    <>
      {props.listStructure.map((item) => { return renderParent(item) })}
    </>
  )
}

function renderParent(parent) {
  const renderedChildren = parent.children.map((item, index) => {
    if (item.type === 'child') {
      return <li key={parent.name + ' child ' + index}><div>
        {item.display ? item.display : item.name + ', ' + parent.name + ' child ' + index}
      </div></li>
    } else { // has another parent
      return renderParent(item)
    }
  })
  return (
    <div key={'collapsible list parent' + parent.name} style={{ width: '75%' }}>
      <li className={styles.parentWrapper} onClick={toggleChildren}>
        <div><i className={styles.arrow}></i></div>
        <h3 style={{ padding: '0' }}>{parent.display ? parent.display : parent.name}</h3>
      </li>
      <div className={styles.childrenWrapper}><ul style={{ margin: '0' }}>{renderedChildren}</ul></div>
    </div>
  )
}

// an entire thread about collapse animations: https://stackoverflow.com/questions/3508605/how-can-i-transition-height-0-to-height-auto-using-css
function toggleChildren(e) {
  const parentElement = e.currentTarget
  const childrenWrapper = parentElement.nextElementSibling

  // toggling between styles when the parent element is clicked
  if (parentElement.style.backgroundColor === 'rgb(34, 34, 34)') {
    parentElement.style.backgroundColor = 'rgb(62, 62, 62)'
    parentElement.querySelector('.' + styles.arrow).style.transform = 'rotate(-135deg)'
  } else {
    parentElement.style.backgroundColor = 'rgb(34, 34, 34)'
    parentElement.querySelector('.' + styles.arrow).style.transform = 'rotate(45deg)'
  }

  // calculating the new height of all the parents after a list has been opened
  if (!childrenWrapper.style.height || childrenWrapper.style.height == '0px') { // opening a wrapper
    const addHeight = Array.prototype.reduce.call(childrenWrapper.childNodes, function (p, c) {
      return p + (c.offsetHeight || 0);
    }, 0)
    // the new height of its own wrapper
    childrenWrapper.style.height = addHeight + 'px'
    // increasing height of parent element if necessary
    updateParentHeight(parentElement, addHeight, true)
    // set overflow to visible so that potential popups on hover would work
    childrenWrapper.addEventListener('transitionend', () => childrenWrapper.style.overflow = 'visible', { once: true })

  } else { // closing a wrapper
    // decreasing height of parent element if necessary
    updateParentHeight(parentElement, childrenWrapper.style.height, false)
    // the new height of its own wrapper
    childrenWrapper.style.height = '0px';
    // set overflow back to hidden
    childrenWrapper.style.overflow = 'hidden';
  }
}

function updateParentHeight(parent, addHeight, expand) {
  const hasParent = parent.closest("." + styles.childrenWrapper)

  if (hasParent) {
    addHeight = expand ? addHeight : -1 * parseInt(addHeight)
    // updating the parent's height
    hasParent.style.height = (parseInt(hasParent.style.height.slice(0, -2)) + addHeight) + 'px'

    // checking if there is another parent that needs its height updated using recursion
    if (hasParent.closest('.' + styles.childrenWrapper + ' :not(div)')) {
      updateParentHeight(hasParent.previousSibling, expand ? addHeight : -1 * parseInt(addHeight), expand)
    }
  }
}