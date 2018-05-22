
let count = 0;

let app = {
    title: 'App Title',
    subtitle: 'App Subtitle',
    options: []
};

let root = document.getElementById('app');

const removeAll = () => {
    app.options = [];
    render();
};
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const render = () => {

    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here is your options' : 'No Options'}</p>
            <p>{app.options.length}</p>
            <button onClick={removeAll} >Remove All</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, root);

}

render();