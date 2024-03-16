/* global describe, it, before */

const { expect } = require('chai');
const loadyescryptr32 = require('../lib/yescryptr32');

const {
  fox,
  empty,
  dash,
  longDream,
  buffer,
} = require('./fixtures');

describe('yescryptr32', () => {
  let yescryptr32;
  before(async () => {
    yescryptr32 = await loadyescryptr32();
  });

  describe('hashes', () => {
    it('empty string', async () => {
      expect(yescryptr32.digest(empty).toString('hex'))
        .to.equal('e1ac4659e3d022287ae679e96b8c925a5d52ab372ab3066736f487da558b3398');
    });

    it('fox string', () => {
      expect(yescryptr32.digest(fox).toString('hex'))
        .to.equal('5968e0eabb04a5251b1bce08a756a12c275da7781e05abcc12dde291abd3ae64');
    });

    it('dash string', () => {
      expect(yescryptr32.digest(dash).toString('hex'))
        .to.equal('092cefdd3b559e75fc712bf7c92700b87cf08007608136e1ba40330049cf64db');
    });

    it('dream string', () => {
      expect(yescryptr32.digest(longDream).toString('hex'))
        .to.equal('c875001bd92ed1000323b6a65df4200fac0bc7853fce6f169f622bdb5434d5bd');
    });

    it('buffer', () => {
      expect(yescryptr32.digest(buffer).toString('hex'))
        .to.equal('1b02406064f868352ee85ea2c153afd3028fd35aa242c3fc1610be7cfc47f615');
    });
  });
});
