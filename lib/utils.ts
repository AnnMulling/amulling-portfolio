
export const validatateString = (value: unknown, maxLength: number) => {
    if (!value || typeof value !== "string" || value.length > maxLength) {
        return {
            error: "Invalid message"
        };
      };
      return true;
}
