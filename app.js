let result = [];
let i = 0;

document.querySelector('#btn-no').addEventListener('click', () => {
    // console.log('Hi;')

    document.querySelector('#container-no').style.display = 'none';
    document.querySelector('#container-red').style.display = 'block';
})

document.querySelector('#btn-red0').addEventListener('click', () => {
    // console.log('Hi');

    document.querySelector('#container-red').style.display = 'none';
    document.querySelector('#container-yellow').style.display = 'block';

    i = 0;
    result[i] = 1;
})

document.querySelector('#btn-red1').addEventListener('click', () => {
    // console.log('Hi');

    document.querySelector('#container-red').style.display = 'none';
    document.querySelector('#container-yellow').style.display = 'block';

    // result[i] = 1;
})

document.querySelector('#btn-yellow0').addEventListener('click', () => {
    // console.log('Hi');

    document.querySelector('#container-yellow').style.display = 'none';
    document.querySelector('#container-green').style.display = 'block';

    if (result.length == 1) {
        i++;
        result[i] = 2;
    }
    else {
        result[i] = 2;
    }
})

document.querySelector('#btn-yellow1').addEventListener('click', () => {
    // console.log('Hi');

    document.querySelector('#container-yellow').style.display = 'none';
    document.querySelector('#container-green').style.display = 'block';

    // result[i] = 2;
})

document.querySelector('#btn-green0').addEventListener('click', () => {
    // console.log('Hi');

    document.querySelector('#container-green').style.display = 'none';
    document.querySelector('#container-blue').style.display = 'block';

    if (result.length >= 1) {
        i++;
        result[i] = 4;
    }
    else {
        result[i] = 4;
    }
})

document.querySelector('#btn-green1').addEventListener('click', () => {
    // console.log('Hi');

    document.querySelector('#container-green').style.display = 'none';
    document.querySelector('#container-blue').style.display = 'block';

    // result[0] = 4;
})

document.querySelector('#btn-blue0').addEventListener('click', () => {
    // console.log('Hi');

    document.querySelector('#container-blue').style.display = 'none';
    document.querySelector('#container-violet').style.display = 'block';

    if (result.length >= 1) {
        i++;
        result[i] = 8;
    }
    else {
        result[i] = 8;
    }
})

document.querySelector('#btn-blue1').addEventListener('click', () => {
    // console.log('Hi');

    document.querySelector('#container-blue').style.display = 'none';
    document.querySelector('#container-violet').style.display = 'block';

    // result[0] = 4;
})

document.querySelector('#btn-violet0').addEventListener('click', () => {
    // console.log('Hi');

    document.querySelector('#container-violet').style.display = 'none';
    document.querySelector('#container-load').style.display = 'flex';

    if (result.length >= 1) {
        i++;
        result[i] = 16;
    }
    else {
        result[i] = 16;
    }
})

document.querySelector('#btn-violet1').addEventListener('click', () => {
    // console.log('Hi');

    document.querySelector('#container-violet').style.display = 'none';
    document.querySelector('#container-load').style.display = 'flex';

    // result[3] = 8;
})

document.querySelector('#container-load').addEventListener('click', () => {
    // console.log('Hi');

    document.querySelector('#container-load').style.display = 'none';
    document.querySelector('#container-result').style.display = 'flex';

    if (result.length > 0) {
        let final = 0;

        for (let i=0; i < result.length; i++) {
            final += result[i];        
        }
        // console.log(final);
        document.querySelector('#result').innerHTML = final;
    }
    else {
        document.querySelector('#cheat').innerHTML = `<h2>You're cheating :3</h2>`;
    }
})

document.querySelector('#btn-remake').addEventListener('click', () => {
    document.querySelector('#container-result').style.display = 'none';
    document.querySelector('#container-no').style.display = 'flex';

    result = [];
})