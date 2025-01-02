import { defineStore } from "pinia";

export const useNotesStore = defineStore("notes", {
  state: () => ({
    index: 0,
    notes: [],
    note:{
      subject: "",
      content: "",
    } // Array of chat messages
  }),
  actions: {
    addMessage(message) {
      this.messages.push(message);
    },
    resetChat() {
      this.messages = [];
    },
  },
});
