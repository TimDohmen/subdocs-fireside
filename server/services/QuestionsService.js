import mongoose from "mongoose";
import Question from "../models/Question";

const _repository = mongoose.model("question", Question);

class QuestionsService {

  async getAll() {
    return await _repository.find({});
  }
  async create(rawData) {
    return await _repository.create(rawData);
  }
  async delete(id) {
    await _repository.findByIdAndDelete(id);
  }


  async addOption(id, body) {
    return await _repository.findOneAndUpdate({ _id: id }, { $addToSet: { options: body } }, { new: true })
  }

  async deleteOption(id, optionId) {
    return await _repository.findOneAndUpdate({ _id: id }, { $pull: { options: { _id: optionId } } }, { new: true })
  }
}

const questionService = new QuestionsService();
export default questionService;
