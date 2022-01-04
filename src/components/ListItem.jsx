function ListItem (props) {
  return (
    <li className='list-item'>
      <a href='/'>{ props.name }</a>
    </li>
  )
}

export default ListItem