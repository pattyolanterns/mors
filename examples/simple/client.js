"use strict";

var mqtt = require('mqtt');
var client = mqtt.createClient(9191);

client.publish('/hello/me', 'hello_me');
client.publish('/hello/you', 'hello_you');
client.publish('/some/ty/you', 'some_ty_you');

setTimeout(client.end.bind(client), 1000);