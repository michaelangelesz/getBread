const React = require("react")

function Default(html) {
  return (
    <html>
      <head>
        <title>Default</title>
        <link rel="icon" type="image/png" href="images/bread.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"
          integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ=="
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/breads">Breads</a>
            </li>
            <li>
              <a href="/breads/new">Add a Bread</a>
            </li>
          </ul>
        </nav>
        <div className="wrapper">
          <header>
            <h1>
              <a href="/breads">BreadCRUD</a>
            </h1>
          </header>
          <div className="container">{html.children}</div>
        </div>
        <div className="footer">
          <div className="container">
            <span className="my-info">
              ♦︎ Mike W ♦︎{" "}
              <a href="https://www.linkedin.com/in/michael-m-weisphal/">
                LinkedIn
              </a>{" "}
              ♦︎ <a href="https://github.com/michaelangelesz"> GitHub</a> ♦︎{" "}
              <a href="https://michaelangelesz.github.io/FSI-Build-a-Portfolio/">
                Portfolio
              </a>{" "}
              ♦︎ <a href="https://www.instagram.com/michaelangelesz/">Insta</a>{" "}
              ♦︎
            </span>
          </div>
        </div>
      </body>
    </html>
  )
}

module.exports = Default
