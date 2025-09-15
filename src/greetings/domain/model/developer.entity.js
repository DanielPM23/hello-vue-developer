/**
 * Represents a developer with a first name and last name.
 */
export class Developer {
    /**
     * @type {string}
     * @private
     */
    #firstName;

    /**
     * @type {string}
     * @private
     */

    #lastName;

    /**
     * Creates a new developer instance.
     * @remarks
     * Trims whitespace from the first and last names. If either name is null or undefined, it defaults to an empty string.
     * The full name is derived from the first and last names, or defaults to "Unknown" if both are empty.
     * @param {string} firstName - the first name of the developer
     * @param {string} lastName - the last name of the developer
     */

    constructor(firstName, lastName) {
        this.#firstName = firstName?.trim() || "";
        this.#lastName = lastName?.trim() || "";
    }

    /**

     * Gets the first name of the developer.
     * @returns {string} The first name of the developer.
     */

    get firstName() {
        return this.#firstName;
    }

    /**
     * Gets the last name of the developer.
     * @returns {string} The last name of the developer.
     */

    get lastName() {
        return this.#lastName;
    }

    /**
     * Gets the full name of the developer.
     * If either the first name or last name is missing, it returns "Unknown".
     * @returns {string} The full name of the developer or "Unknown" if either name is missing.
     */

    get fullName() {
        return this.#firstName && this.#lastName
            ? `${this.#firstName} ${this.#lastName}`
            : "Unknown";
    }
}