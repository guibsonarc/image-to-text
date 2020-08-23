/**
 * Controller to convert image to text
 */

const vision = require('@google-cloud/vision');

class ImageToTextController {
  async index(req, res) {
    return res.render('index');
  }

  async imageToText(req, res) {
    try {
      const client = new vision.ImageAnnotatorClient();

      const [result] = await client.textDetection(req.file.buffer);
      const detections = result.textAnnotations;

      if (detections.length) {
        return res.render('index', { description: detections[0].description });
      } else {
        return res.render('index', { description: 'Escolha uma imagem com texto.' });
      }
    } catch (error) {
      return res.render('index', { description: 'Aconteceu algo de errado.' });
    }
  }
}

module.exports = new ImageToTextController();
