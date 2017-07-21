class Constructors {
    handle(source, name, args) {
        this[name] = sinon.stub();
        this[name].apply(source, args);
    }
}

var constructors = new Constructors();

export default constructors;
