const Asset = require('../models/asset');

exports.createAsset = async (req, res) => {
  try {
    const asset = new Asset(req.body);
    await asset.save();
    res.status(201).send(asset);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAssets = async (req, res) => {
  try {
    const assets = await Asset.find();
    res.status(200).send(assets);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteAsset = async (req, res) => {
  try {
    const asset = await Asset.findByIdAndDelete(req.params.id);
    if (!asset) {
      res.status(404).send();
    } else {
      res.status(200).send(asset);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateAsset = async (req, res) => {
  try {
    const asset = await Asset.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!asset) {
      res.status(404).send();
    } else {
      res.status(200).send(asset);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};
