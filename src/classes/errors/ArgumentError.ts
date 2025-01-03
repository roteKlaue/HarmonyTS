export class ArgumentError extends Error {
    public readonly argumentName: string;
    public readonly reason: string;

    constructor(argumentName: string, reason: string) {
        super(`Error with argument "${argumentName}": ${reason}`);
        this.argumentName = argumentName;
        this.reason = reason;

        Object.setPrototypeOf(this, ArgumentError.prototype);
    }

    public static missingArgument(argName: string) {
        return new ArgumentError(argName, "Argument is required but was not provided.");
    }
}
