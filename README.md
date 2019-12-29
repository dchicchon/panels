# Panels

## Summary

This is solely an artistic coding project dedicated to making cool background with code

### React Panels

This renders the panels onto the page, I did this so that there would be rows of panels on the page depending on the screen height and width

```javascript
componentDidMount() {
// Check the screen width
this.setState({
    panelsWidth: Math.floor(window.screen.width / 30),
    panelsHeight: Math.floor(window.screen.height / 30)
});
}

renderPanels = () => {
  let panelArr = [];
  for (let i = 0; i < this.state.panelsHeight; i++) {
    let row = [];
    for (let j = 0; j < this.state.panelsWidth; j++) {
      row.push(<Panel key={j} />);
    }
    panelArr.push(
      <div className="row" key={i}>
        {row}
      </div>
    );
  }
  return panelArr;
};
```

## React Lifecycle

- [Lifecycle Docs](https://reactjs.org/docs/react-component.html)
  Each component has several "Lifecycle Methods" that you can override to run code at a particular times in the process.

#### Mounting

Gets called in the following order when an instance of a component is being created and inserted into the DOM

- constructor()
- static getDerivedFromProps()
- render()
- componentDidMount()

#### Updating

An update cause by changes to props or state. These methods are called in the following order when the component is being re-rendered

- shouldComponentUpdate()
- render()
- componentDidUpdate()

#### Unmounting

Method is called when a component is being removed from the DOM

- componentWillUnmount()

#### Error Handling

Called when there is an error during rendering.

- componentDidCatch()

#### Other APIs

- setState()
- forceUpdate()

## Important React Information

Do not do this!

```javascript
constructor(props) {
    super(props)
    this.state={color: props.color}
}
```

## Future Goals

In the future, I would like to create a control panel that will allow the user to change the functionality of the panels

- Upload a picture that will then be rendered in some blocky interperative way on the page
