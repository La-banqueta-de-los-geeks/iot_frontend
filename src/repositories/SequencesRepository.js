import { setAuthUserToken } from '../services/ApiInstance';
import { createSequence, getSequences } from '../services/resources/sequences';

export default class SequencesRepository {
  constructor() {
    this.sequence = null;
    this.errors = null;
    this.device = null;
    this.deviceGroup = null;
    this.deviceSequence = null;
    this.sequences = [];
  }

  setDevice(device) {
    this.device = device;
    return this;
  }

  setDeviceGroup(deviceGroup) {
    this.deviceGroup = deviceGroup;
    return this;
  }

  setDeviceSequence(deviceSequence) {
    this.deviceSequence = deviceSequence;
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
      createSequence(this.deviceGroup.id, this.deviceSequence.id, {
        sequence: sequence,
      })
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
