export default class CustomError extends Error {
  constructor(message) {
    super(message);
    this.codeStatus = null;
  }

  serializeError() {
    return null;
  }
}
