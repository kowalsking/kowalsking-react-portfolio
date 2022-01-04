import ListItem from './ListItem'

function Navbar () {
  const menu = ['About', 'Inspiration', 'Projects']
  const list = menu.map((item, i) => {
    return <ListItem name={ item } key={ i }></ListItem>
  })

  return (
    <nav className='menu'>
      <ul>
        { list }
      </ul>
    </nav>
  )
}

export default Navbar