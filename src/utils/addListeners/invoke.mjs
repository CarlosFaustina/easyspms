export default function invoke(self, action) {
    if (typeof self.actions[action] === "function") {
        self.actions[action]();
        self.parseStatus(action);
    }
}
