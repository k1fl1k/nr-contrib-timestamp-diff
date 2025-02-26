"use strict";

const moment = require("moment");

/**
 * @param {import("node-red").NodeRedApp} RED
 */
module.exports = function (RED) {
  /**
   * @this {import("node-red").Node & Record<string,any>}
   * @param {import("node-red").NodeSettings<Record<string,any>>} config
   */
  function TimestampDiffNode(config) {
    const node = this;
    RED.nodes.createNode(this, config);

    this.inputKey1 = config.input_key1 || "timestamp1";
    this.inputKey2 = config.input_key2 || "timestamp2";
    this.units = config.units || "seconds";
    this.outputKey = config.output_key || "payload";

    node.on("input", function (msg, send, done) {
      const t1 = msg[node.inputKey1] || msg.payload[node.inputKey1];
      const t2 = msg[node.inputKey2] || msg.payload[node.inputKey2];

      if (!t1 || !t2) {
        node.warn("Missing timestamp values");
        return done();
      }

      const moment1 = moment(t1);
      const moment2 = moment(t2);

      if (!moment1.isValid() || !moment2.isValid()) {
        node.warn("Invalid timestamp format");
        return done();
      }

      const diff = moment2.diff(moment1, node.units);
      msg[node.outputKey] = diff;

      send(msg);
      done();
    });
  }

  RED.nodes.registerType("timestamp-diff", TimestampDiffNode);
};
