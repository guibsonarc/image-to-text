var React = require('react');

function DefaultLayout(props) {
  return (
    <html>
      <head>
        <title>ImageToText</title>
      </head>
      <body>
        <div>
          <div>
            <h1>ImageToText</h1>
          </div>
          <form method="post" action="/image" encType="multipart/form-data">
            <input type="file" name="image" id="image" required />
            <button type="submit">Gerar texto</button>
          </form>
        </div>
        <div>
          <p>{props.description}</p>
        </div>
      </body>
    </html>
  );
}

module.exports = DefaultLayout;
