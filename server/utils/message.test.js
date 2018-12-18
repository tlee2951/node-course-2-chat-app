var expect = require("expect");

var { generateMessage, generateLocationMessage } = require("./message");

describe("generateMessage", () => {
  it("should generate correct message object", () => {
    var from = "Jen";
    var text = "Some message";
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA("number");
    expect(message).toInclude({
      from,
      text
    });
  });
});

describe("generateLocationMessage", () => {
  it("should generate correct location object", () => {
    var from = "Jon";
    var latitude = 01234;
    var longitude = 56789;
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA("number");
    expect(message).toInclude({
      from,
      url: `https://www.google.com/maps?q=${latitude},${longitude}`
    });
  });
});
