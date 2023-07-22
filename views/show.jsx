const React = require('react')
const Default = require('./layouts/default')

function Show ({ bread }) {
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{bread.name}</h3>
        <p>
          {bread.hasGlutenParagraph()}
        </p>
        <p>{bread.getBakedBy()}</p>
        <img src={bread.image} alt={bread.name}/>

        <a href={`/breads/${bread._id}/edit`}><button>EDIT</button></a>

        <form action={`/breads/${bread._id}?_method=DELETE`} method="POST" >
          <input type="submit" value="Delete"/>
        </form>
      </Default>
    )
}

module.exports = Show
