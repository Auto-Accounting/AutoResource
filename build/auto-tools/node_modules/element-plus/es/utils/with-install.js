var withInstall = (component) => {
    component.install = (app) => {
        app.component(component.name, component);
    };
    return component;
};

export default withInstall;
