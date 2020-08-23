/**
 * Default template
 */

var React = require('react');

function DefaultLayout(props) {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="styles.css" />
        <title>Image to Text</title>
      </head>
      <body>
        <div className="section-top">
          <div className="container">
            <div className="content-top">
              <div className="logo">
                <h1>Image to Text</h1>
              </div>
              <form method="post" action="/image" encType="multipart/form-data">
                <label htmlFor="image" id="image-label">Escolha uma imagem</label>
                <input type="file" name="image" id="image" required />
                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </div>
        <div className="section-bottom">
          <div className="container">
            <div className="content-bottom">
              <p className="description">{props.description}</p>
            </div>
          </div>
        </div>
      </body>
      <script src="script.js"></script>
    </html>
  );
}

module.exports = DefaultLayout;
