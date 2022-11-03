import consumer from "./consumer"
import {scroll_bottom} from '../packs/application';
 

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("Connected to the chat room!");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
     $('#message-container').append(data.foo);
     return scroll_bottom();
  }
});
