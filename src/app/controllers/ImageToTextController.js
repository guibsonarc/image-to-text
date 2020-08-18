const vision = require('@google-cloud/vision');

class ImageToTextController {
  async index(req, res) {
    return res.render('index');
  }

  async imageToText(req, res) {
    const client = new vision.ImageAnnotatorClient();

    const [result] = await client.textDetection(req.file.buffer);
    const detections = result.textAnnotations;

    if (detections.length) {
      return res.render('index', { description: detections[0].description });
    } else {
      return res.render('index', { description: 'Escolha uma imagem com texto.' });
    }
  }
}

module.exports = new ImageToTextController();
