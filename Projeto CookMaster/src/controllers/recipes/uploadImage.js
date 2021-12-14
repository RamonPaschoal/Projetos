const serviceUploadImage = require('../../service/recipes/uploadImage');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const token = req.headers.authorization;
  
    const uploadImage = await serviceUploadImage(id, token);

    if ('message' in uploadImage) {
      return res.status(401).json({ message: uploadImage.message });
    }
  
    return res.status(200).json(uploadImage);
  } catch (err) {
    next(err);
  }
};
