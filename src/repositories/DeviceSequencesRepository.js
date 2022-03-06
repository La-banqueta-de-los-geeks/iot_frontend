import { setAuthUserToken } from '../services/ApiInstance';
import { createSequence, getSequences } from '../services/resources/sequences';

export default class SequencesRepository {
  constructor() {
    this.sequence = null;
    this.errors = null;
    this.device = null;
    this.sequences = [];
  }

  setDevice(device) {
    this.device = device;
    return this;
  }

  assignToken() {
    setAuthUserToken(this.device.device_token);
    return this;
  }

  all() {
    return new Promise((result, rejected) => {
      getSequences()
        .then(({ data }) => {
          this.sequences = data.sequences;
          result(this);
        })
        .catch((error) => {
          this.errors = error;
          if (error.response) {
            this.errors = error.response.data;
            rejected(this);
          } else {
            this.errors = ['FAIL'];
            console.log('Error', error);
            rejected(this);
          }
        });
    });
  }

  add(sequence) {
    return new Promise((result, rejected) => {
      createSequence({ sequence: sequence })
        .then(({ data }) => {
          this.sequence = data.sequence;
          result(this);
        })
        .catch((error) => {
          this.errors = error;
          if (error.response) {
            this.errors = error.response.data;
            rejected(this);
          } else {
            this.errors = ['FAIL'];
            console.log('Error', error);
            rejected(this);
          }
        });
    });
  }
}
