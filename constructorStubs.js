console.log("Stubs");

class ConstructorStubs {
    handle(source, name, args) {
        this[name] = sinon.stub();
        this[name].apply(source, args);
    }
}

var constructorStubs = new ConstructorStubs();

export default constructorStubs;
