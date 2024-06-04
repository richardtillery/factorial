export default (input) => {
    return computeNextNumber(input);
}

function computeNextNumber(input) {
    if(input === 1) return input;
    return input * computeNextNumber(input - 1);
}