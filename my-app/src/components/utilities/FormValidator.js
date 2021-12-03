
export const fieldIsRequired = (value) => {
    if (value) return undefined;
    return "Field is required";
}

export const maxLengthValid = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Max symbols is ${maxLength}`;
    return undefined;
}