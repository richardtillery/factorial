import computeNextNumber from './computer.mjs';

export const computeFactorial = async (input) => {
    //let input = parseInt(process.argv[2]);
    if(typeof input != "number" || input === 0) return 0;
    console.log(computeNextNumber(input));
}


