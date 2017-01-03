const got = require('got');
const azureService = 'https://wal.sh/static/decentralized-identity';

export default class Attestations {
  constructor (options = {}) {
    this.key = options.key;
  }

  create (options = {}) {
    return new Promise((resolve, reject) => {
      if (!options.ids && !options.chainpoint) {
        throw 'You must specify an attestation action to perform - your choices are: identity signing, chain anchoring, or both';
      }
      if (!options.data) {
        throw 'You provided no attestation data';
      }
      options.key = this.key;
      got.post(`${azureService}/create.json`, {
        json: true,
        body: options
      }).then(response => {
        resolve(response.body.record);
      }).catch(response => {
        reject(response);
      })
    });
  }

  retrieve (id) {
    return new Promise((resolve, reject) => {
      if (this.record) resolve(this.record);
      else got.get(`${azureService}/attestation/${id}.json`, {
        json: true,
        body: { key: this.key }
      }).then(response => {
        resolve(response.body); // .record
      })
    });
  }

  status (id) {
    return got.get(`${azureService}/status/${id}.json`, {
      json: true,
      body: { key: this.key }
    })
  }

  listen (id) {

  }

  verify (id) {

  }

}
