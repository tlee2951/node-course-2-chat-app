var socket = io();

socket.on("connect", function() {
  console.log("Connected to server");

  socket.emit("createEmail", {
    to: "jen@example.com",
    text: "Hey. This is Andrew"
  });

  socket.emit("createMessage", {
    from: "Hubba bubba",
    text: "Suck it Billy Bob!"
  });
});

socket.on("disconnect", function() {
  console.log("Disconnected from server");
});

socket.on("newEmail", function(email) {
  console.log("New email", email);
});

socket.on("newMessage", function(msg) {
  console.log("Got new message", msg);
});
