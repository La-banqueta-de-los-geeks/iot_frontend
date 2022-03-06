import { setAuthUserToken } from '../services/ApiInstance';
import {
  allPortValues,
  createPortValue,
} from '../services/resources/port_values';

export default class PortValuesRepository {
  constructor() {
    this.portValue = null;
    this.errors = null;
    this.organization = null;
    this.portValues = [];
  }

  setOrganization(organization) {
    this.organization = organization;
    return this;
  }

  assignToken() {
    setAuthUserToken(this.organization.organization_token);
    return this;
  }

  all() {
    return new Promise((result, rejected) => {
      allPortValues()
        .then(({ data }) => {
          this.portValues = data.port_values;
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

  add(portValue) {
    return new Promise((result, rejected) => {
      createPortValue({ port_value: portValue })
        .then(({ data }) => {
          this.portValue = data.port_value;
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
