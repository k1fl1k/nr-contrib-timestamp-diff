# Node-RED Timestamp Diff Node

A custom Node-RED node that calculates the difference between two timestamps in the selected time unit (milliseconds, seconds, minutes, hours, or days).

## Overview

This node computes the time difference between two timestamps. The timestamps are provided via input keys in the incoming message and the result is stored in the output key. You can choose the time unit (milliseconds, seconds, minutes, hours, or days) for the calculation.

## Features

- **Input Keys**: Define the keys for the two timestamps in the incoming message.
- **Units**: Choose the time unit for the difference calculation: milliseconds, seconds, minutes, hours, or days.
- **Output Key**: Specify the key where the result will be stored in the outgoing message.

## Installation

1. Navigate to your Node-RED user directory (usually `~/.node-red`).
2. Clone or copy the node into the `nodes` directory of your Node-RED setup.
3. Run `npm install` to install any required dependencies.
4. Restart Node-RED.

## Usage

Once installed, the `timestamp-diff` node will appear in the **function** category in the Node-RED palette.

### Configuration Options

- **Input Key 1**: (Required) The key for the first timestamp. Default: `timestamp1`.
- **Input Key 2**: (Required) The key for the second timestamp. Default: `timestamp2`.
- **Units**: (Required) Choose the unit to calculate the difference in: milliseconds, seconds, minutes, hours, or days. Default: `seconds`.
- **Output Key**: (Optional) The key where the result will be stored. Default: `payload`.

### Example Flow

```json
[
    {
        "id": "timestamp-diff-node",
        "type": "timestamp-diff",
        "input_key1": "timestamp1",
        "input_key2": "timestamp2",
        "units": "seconds",
        "output_key": "payload",
        "wires": [["next-node"]]
    }
]
