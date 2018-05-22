
let count = 0;

let root = document.getElementById('app');

const addCount = () => {
    count++;
    render();
};
const subtractCount = () => {
    count--;
    render();
};
const resetCount = () => {
    count = 0;
    render();
};

const render = () => {

    const template = (
        <div>
            <h1>Count: {count}</h1>
            <p>This is counter app :)</p>
            <button onClick={addCount} >Add Count</button>
            <button onClick={subtractCount} >Minus Count</button>
            <button onClick={resetCount} >Reset Count</button>
        </div>
    );

    ReactDOM.render(template, root);

}







render();