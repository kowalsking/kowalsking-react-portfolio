function SecondLine () {
  const contacts = [
    {
      name: 'telegram',
      link: 'https://t.me/kowalsking'
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/dmytro-kozlenko-b74083132/'
    },
    {
      name: 'github',
      link: 'https://github.com/kowalsking'
    }
  ]

  const contactsLinks = contacts.map((item, index) => {
    return (<a href={ item.link } className='contact-link' target='_blank' rel="noreferrer">
      <i className={`fab fa-${item.name}`}></i>
    </a>)
  })

  return (
    <div className='header-flex'>
      <div className='flex-center'>
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <div className="header-composition">
                <div className="welcome">
                  <div className="hithere"><span>Hi there!</span></div>
                  <h1>I'm a JavaScript Developer</h1>
                  <strong>Kyiv, Ukraine</strong>
                  <p>
                    I have a strong thirst for new knowledge, which I try to
                    satisfy daily. You can learn more about me in my <a class="cv" href="./about/index.html">CV</a> or by
                    contacting me directly.
                  </p>

                  <div className="contacts">
                    <div className="icons">
                      { contactsLinks }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondLine